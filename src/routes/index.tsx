import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import { events, images, journey, stats } from "@/data/samyak";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Countdown } from "@/components/site/Countdown";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAMYAK — The Ultimate Campus Experience" },
      {
        name: "description",
        content:
          "SAMYAK: three days, 100+ events, 10,000+ participants. Technology, culture, gaming and spectacle on one campus.",
      },
      { property: "og:title", content: "SAMYAK — The Ultimate Campus Experience" },
      {
        property: "og:description",
        content: "Three days, 100+ events, 10,000+ participants. Register for SAMYAK.",
      },
    ],
  }),
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.img
        src={heroImg}
        alt="SAMYAK main stage lit by crimson beams above a packed crowd"
        width={1920}
        height={1088}
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-40"
      >
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          12–14 November · Main Campus Grounds
        </motion.p>

        <motion.h1
          className="mt-6 text-[clamp(4.5rem,19vw,17rem)] leading-[0.82]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          SAM<span className="text-ember">YAK</span>
        </motion.h1>

        <div className="mt-8 grid gap-10 border-t border-border pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <motion.p
              className="text-sm uppercase tracking-[0.4em] text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              The Ultimate Campus Experience
            </motion.p>
            <motion.p
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Seventy-two hours of engineering, performance, competition and light. SAMYAK turns the
              campus into a festival city — six tracks, a hundred events, one relentless stage.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
            >
              <MagneticButton to="/events" variant="solid">
                Explore Events
              </MagneticButton>
              <MagneticButton to="/registration" variant="outline">
                Register Now
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Countdown />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">01 — About</p>
          <h2 className="mt-6 text-[clamp(2.5rem,6vw,5rem)]">
            A festival
            <br />
            built like a<br />
            <span className="text-ember">production.</span>
          </h2>
          <div className="mt-10 space-y-6 border-l border-primary/40 pl-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              <span className="text-foreground">Vision.</span> Give every student a stage worth
              remembering — the scale of an international festival, run entirely by the campus.
            </p>
            <p>
              <span className="text-foreground">Mission.</span> Build a platform where technical
              rigour and cultural craft share the same spotlight, and where anyone can walk in and
              find their track.
            </p>
            <p>
              <span className="text-foreground">The experience.</span> Amphitheatre nights, a
              combat-robotics pit, an esports dome, film screenings and workshops running in
              parallel from morning to midnight.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          <Reveal delay={0.1} className="sm:mt-16">
            <div className="group overflow-hidden">
              <img
                src={images.g1}
                alt="Crowd under red stage lasers at a past SAMYAK edition"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-[380px] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="group overflow-hidden">
              <img
                src={images.g3}
                alt="Dancer performing in crimson spotlights"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-[380px] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="sm:col-span-2">
            <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
              {[
                ["100+", "Events across six tracks"],
                ["10K+", "Expected participants"],
                ["17", "Past editions"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-8">
                  <p className="font-display text-4xl text-primary">{k}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const featured = events.slice(0, 6);
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <p className="eyebrow">02 — Highlights</p>
            <h2 className="mt-5 text-[clamp(2.5rem,6vw,5rem)]">Event highlights</h2>
          </div>
          <Link
            to="/events"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
          >
            All events
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((e, i) => (
          <Reveal key={e.id} delay={(i % 3) * 0.08}>
            <article className={i % 3 === 1 ? "lg:mt-16" : ""}>
              <div className="group relative overflow-hidden">
                <img
                  src={e.image}
                  alt={`${e.name} — ${e.category} event at SAMYAK`}
                  loading="lazy"
                  width={1280}
                  height={860}
                  className="h-[280px] w-full object-cover grayscale-[35%] transition-all duration-[1.2s] group-hover:scale-105 group-hover:grayscale-0"
                />
                <span className="absolute left-4 top-4 border border-primary/60 bg-background/70 px-3 py-1 text-[0.6rem] uppercase tracking-[0.24em] text-primary backdrop-blur">
                  {e.category}
                </span>
              </div>
              <h3 className="mt-6 text-2xl">{e.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {e.date} · {e.venue}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
              <Link
                to="/events"
                className="mt-5 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-foreground transition-colors hover:text-primary"
              >
                View details <ArrowUpRight size={14} />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28">
      <Reveal>
        <p className="eyebrow">03 — Journey</p>
        <h2 className="mt-5 text-[clamp(2.5rem,6vw,5rem)]">The SAMYAK journey</h2>
      </Reveal>

      <div className="relative mt-16 pl-10 md:pl-0">
        <div className="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2" />
        {journey.map((j, i) => (
          <Reveal key={j.title} delay={0.05 * i}>
            <div
              className={`relative flex py-10 md:w-1/2 ${
                i % 2 ? "md:ml-auto md:pl-16" : "md:pr-16 md:text-right"
              }`}
            >
              <span
                className={`absolute top-[52px] h-3.5 w-3.5 -translate-x-[3px] rounded-full border border-primary bg-background shadow-[0_0_18px_2px_var(--primary)] md:top-[52px] ${
                  i % 2 ? "md:-left-[7px]" : "md:-right-[7px] md:translate-x-[3px]"
                }`}
                style={{ left: "-33px" }}
              />
              <div className="md:w-full">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-primary">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-3xl">{j.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{j.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const galleryItems = [
  { src: images.g1, label: "Crowd", span: "row-span-2" },
  { src: images.g2, label: "Competitions", span: "" },
  { src: images.g3, label: "Performances", span: "row-span-2" },
  { src: images.g4, label: "Workshops", span: "" },
  { src: images.g5, label: "Gaming", span: "" },
  { src: images.g6, label: "Behind the scenes", span: "" },
];

function Gallery() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <p className="eyebrow">04 — Gallery</p>
            <h2 className="mt-5 text-[clamp(2.5rem,6vw,5rem)]">Past moments</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Performances, competitions, crowd shots, workshops and the crew behind the curtain.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid auto-rows-[190px] grid-cols-2 gap-4 md:grid-cols-4">
        {galleryItems.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.06} className={g.span}>
            <figure className="group relative h-full overflow-hidden">
              <img
                src={g.src}
                alt={`${g.label} at SAMYAK`}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-[1.4s] group-hover:scale-110 group-hover:grayscale-0"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-background to-transparent p-4 text-[0.65rem] uppercase tracking-[0.25em] text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {g.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28">
      <Reveal>
        <p className="eyebrow">05 — Why SAMYAK</p>
      </Reveal>
      <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="h-full bg-background p-10">
              <p className="font-display text-[clamp(3rem,6vw,5rem)] text-ember">
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
  );
}

function ClosingCTA() {
  return (
    <section className="relative mt-16 overflow-hidden border-y border-border py-32">
      <img
        src={images.g5}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background" />
      <Reveal className="relative mx-auto max-w-[1400px] px-6 text-center">
        <h2 className="text-[clamp(2.5rem,9vw,8rem)]">
          Ready to be part
          <br />
          of <span className="text-ember">SAMYAK?</span>
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <MagneticButton to="/registration" variant="solid">
            Register Now
          </MagneticButton>
          <MagneticButton to="/events" variant="outline">
            Explore Events
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Highlights />
      <Journey />
      <Gallery />
      <Stats />
      <ClosingCTA />
    </>
  );
}
