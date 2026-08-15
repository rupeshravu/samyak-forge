import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

import heroImg from "@/assets/hero.jpg";
import { MagneticButton } from "@/components/site/MagneticButton";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — SAMYAK" },
      {
        name: "description",
        content: "Sign in to your SAMYAK participant account to manage events and registrations.",
      },
      { property: "og:title", content: "Login — SAMYAK" },
      { property: "og:description", content: "Access your SAMYAK participant dashboard." },
    ],
  }),
  component: LoginPage,
});

const field =
  "w-full rounded-sm border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-primary focus:glow-ring";

function LoginPage() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-40">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass relative w-full max-w-md p-10"
      >
        <p className="eyebrow">Participant access</p>
        <h1 className="mt-5 text-5xl">Welcome back</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Sign in to manage your events and team.
        </p>

        <form
          className="mt-9 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("Signed in — participant dashboard coming soon.");
          }}
        >
          <div>
            <label htmlFor="email" className="eyebrow">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@campus.edu"
              className={`${field} mt-3`}
            />
          </div>
          <div>
            <label htmlFor="password" className="eyebrow">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              className={`${field} mt-3`}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[var(--primary)]" /> Remember me
            </label>
            <a href="#" className="transition-colors hover:text-primary">
              Forgot password?
            </a>
          </div>

          <MagneticButton type="submit" variant="solid" className="w-full">
            Login
          </MagneticButton>

          {status && <p className="text-xs uppercase tracking-[0.2em] text-primary">{status}</p>}
        </form>

        <p className="mt-8 border-t border-border pt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          New here?{" "}
          <Link to="/registration" className="text-foreground hover:text-primary">
            Create account
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
