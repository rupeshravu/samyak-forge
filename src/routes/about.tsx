import { createFileRoute } from "@tanstack/react-router";

import { images, journey, stats } from "@/data/samyak";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { MagneticButton } from "@/components/site/MagneticButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SAMYAK" },
      {
        name: "description",
        content:
          "The vision, mission and scale behind SAMYAK — a student-run campus festival with 100+ events and 17 past editions.",
      },
      { property: "og:title", content: "About — SAMYAK" },
      {
        property: "og:description",
        content: "Student-run, festival-scale: the story behind SAMYAK.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Seventeen editions in"
        description="SAMYAK began as a single-day showcase and became a three-day festival city run entirely by students."
      />

      <section className="mx-auto max-w-[1400px] px-6 pb-24">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <p className="text-lg leading-relaxed text-foreground">
                We build a festival that behaves like a production house: art direction, stage
                engineering, logistics and programming, all owned by student teams.
              </p>
              <div className="border-l border-primary/40 pl-6">
                <p className="eyebrow">Vision</p>
                <p className="mt-3">
                  A campus event with the ambition of an international festival — where the
                  production quality matches the talent on stage.
                </p>
              </div>
              <div className="border-l border-primary/40 pl-6">
                <p className="eyebrow">Mission</p>
                <p className="mt-3">
                  Give technical rigour and cultural craft the same spotlight, and keep every track
                  open to any student who wants in.
                </p>
              </div>
              <div className="border-l border-primary/40 pl-6">
                <p className="eyebrow">The experience</p>
                <p className="mt-3">
                  Amphitheatre nights, a combat-robotics pit, an esports dome, screenings and
                  workshops — running in parallel from morning to midnight.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <img
              src={images.g4}
              alt="Workshop hall at SAMYAK filled with students under red light"
              loading="lazy"
              width={1280}
              height={860}
              className="h-full max-h-[560px] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24">
        <div className="grid gap-px border border-border bg-border md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="h-full bg-background p-10">
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] text-ember">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-32">
        <Reveal>
          <h2 className="text-[clamp(2rem,5vw,4rem)]">How an edition comes together</h2>
        </Reveal>
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-5">
          {journey.map((j, i) => (
            <Reveal key={j.title} delay={i * 0.06}>
              <div className="h-full bg-background p-7">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl">{j.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{j.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap gap-4">
          <MagneticButton to="/registration" variant="solid">
            Register Now
          </MagneticButton>
          <MagneticButton to="/events" variant="outline">
            Explore Events
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
