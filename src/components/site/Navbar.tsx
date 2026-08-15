import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./MagneticButton";

const links = [
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/registration", label: "Registration" },
  { to: "/team", label: "Team" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/login", label: "Login" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6",
      )}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-[0.2em] text-foreground">SAMYAK</span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary transition-all group-hover:shadow-[0_0_12px_3px_var(--primary)]" />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="relative text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <MagneticButton to="/registration" variant="outline">
            Register Now
          </MagneticButton>
        </div>

        <button
          className="text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.to} className="border-b border-border/60 last:border-0">
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm uppercase tracking-[0.24em] text-muted-foreground"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-5">
              <MagneticButton to="/registration" variant="solid" className="w-full">
                Register Now
              </MagneticButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
