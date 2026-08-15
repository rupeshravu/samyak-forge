import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { events } from "@/data/samyak";
import { PageHeader } from "@/components/site/PageHeader";
import { MagneticButton } from "@/components/site/MagneticButton";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration — SAMYAK" },
      {
        name: "description",
        content:
          "Register for SAMYAK: pick your events, add your team and get an instant registration ID.",
      },
      { property: "og:title", content: "Join SAMYAK" },
      {
        property: "og:description",
        content: "Register in under two minutes and lock your slot at SAMYAK.",
      },
    ],
  }),
  component: RegistrationPage,
});

const field =
  "w-full rounded-sm border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-primary focus:glow-ring";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow">
        {label}
      </label>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function RegistrationPage() {
  const [regId, setRegId] = useState<string | null>(null);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = `SMY-26-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    setRegId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (regId) {
    return (
      <section className="mx-auto flex min-h-[100svh] max-w-[900px] flex-col items-center justify-center px-6 py-40 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass w-full p-12"
        >
          <CheckCircle2 className="mx-auto text-primary" size={44} />
          <p className="eyebrow mt-8">Registration confirmed</p>
          <h1 className="mt-6 text-[clamp(2.5rem,8vw,5rem)]">You're in.</h1>
          <p className="mt-6 text-sm text-muted-foreground">
            Save this registration ID — you'll need it at the campus check-in desk.
          </p>
          <p className="mt-8 border border-primary/50 bg-background/60 px-6 py-6 font-display text-4xl tracking-[0.2em] text-ember glow-ring">
            {regId}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton to="/events" variant="outline">
              Explore Events
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => setRegId(null)}>
              Register Another
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Registration"
        title="Join SAMYAK"
        description="One form, all tracks. Registrations close 48 hours before the opening ceremony."
      />

      <section className="mx-auto max-w-[1000px] px-6 pb-32">
        <form onSubmit={submit} className="glass p-8 md:p-12">
          <div className="grid gap-7 md:grid-cols-2">
            <Field id="name" label="Full name">
              <input id="name" required placeholder="Your name" className={field} />
            </Field>
            <Field id="email" label="Email">
              <input
                id="email"
                type="email"
                required
                placeholder="you@campus.edu"
                className={field}
              />
            </Field>
            <Field id="phone" label="Phone">
              <input id="phone" type="tel" required placeholder="+91 90000 00000" className={field} />
            </Field>
            <Field id="college" label="College / University">
              <input id="college" required placeholder="Institution name" className={field} />
            </Field>
            <Field id="department" label="Department">
              <input id="department" required placeholder="e.g. Computer Science" className={field} />
            </Field>
            <Field id="year" label="Year of study">
              <select id="year" required defaultValue="" className={field}>
                <option value="" disabled>
                  Select year
                </option>
                {["First", "Second", "Third", "Fourth", "Postgraduate"].map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </Field>
            <Field id="event" label="Event selection">
              <select id="event" required defaultValue="" className={field}>
                <option value="" disabled>
                  Choose an event
                </option>
                {events.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name} — {e.category}
                  </option>
                ))}
              </select>
            </Field>
            <Field id="team" label="Team name">
              <input id="team" placeholder="Solo entries can leave this blank" className={field} />
            </Field>
            <div className="md:col-span-2">
              <Field id="members" label="Team members">
                <textarea
                  id="members"
                  rows={3}
                  placeholder="One name per line, with email"
                  className={field}
                />
              </Field>
            </div>
            <Field id="payment" label="Payment method">
              <select id="payment" required defaultValue="" className={field}>
                <option value="" disabled>
                  Select method
                </option>
                <option>UPI</option>
                <option>Card</option>
                <option>Net banking</option>
                <option>Pay at campus desk</option>
              </select>
            </Field>
            <Field id="txn" label="Transaction reference">
              <input id="txn" placeholder="Optional if paying at desk" className={field} />
            </Field>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
              By registering you agree to the SAMYAK code of conduct and event rules.
            </p>
            <MagneticButton type="submit" variant="solid">
              Complete Registration
            </MagneticButton>
          </div>
        </form>
      </section>
    </>
  );
}
