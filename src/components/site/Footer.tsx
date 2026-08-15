import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const cols = [
  {
    title: "Explore",
    items: [
      { to: "/about", label: "About" },
      { to: "/events", label: "Events" },
      { to: "/team", label: "Team" },
    ],
  },
  {
    title: "Participate",
    items: [
      { to: "/registration", label: "Registration" },
      { to: "/sponsors", label: "Sponsors" },
      { to: "/login", label: "Login" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="hairline mt-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl tracking-[0.15em]">SAMYAK</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            The ultimate campus experience. Three days of technology, culture and spectacle.
          </p>
          <div className="mt-6 flex gap-4 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-primary">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-primary">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="transition-colors hover:text-primary">
              <Youtube size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="transition-colors hover:text-primary">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <p className="eyebrow">{c.title}</p>
            <ul className="mt-5 space-y-3">
              {c.items.map((i) => (
                <li key={i.to}>
                  <Link
                    to={i.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>hello@samyak.fest</li>
            <li>+91 90000 00000</li>
            <li>Main Campus Grounds</li>
          </ul>
        </div>
      </div>
      <div className="hairline">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 py-6 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Samyak Fest</span>
          <span>Designed for the campus of tomorrow</span>
        </div>
      </div>
    </footer>
  );
}
