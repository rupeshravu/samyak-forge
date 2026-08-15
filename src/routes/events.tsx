import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Trophy, Users, MapPin, CalendarDays } from "lucide-react";

import { categories, events } from "@/data/samyak";
import { PageHeader } from "@/components/site/PageHeader";
import { MagneticButton } from "@/components/site/MagneticButton";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — SAMYAK" },
      {
        name: "description",
        content:
          "Browse every SAMYAK event across technical, cultural, gaming, creative and workshop tracks.",
      },
      { property: "og:title", content: "Events — SAMYAK" },
      {
        property: "og:description",
        content: "100+ events across six tracks. Filter, explore and register.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [active, setActive] = useState<string>("All");
  const list = active === "All" ? events : events.filter((e) => e.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Programme"
        title="The Line-up"
        description="Six tracks running in parallel across three days. Filter by what you came for."
      />

      <section className="mx-auto max-w-[1400px] px-6 pb-28">
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-sm border px-5 py-2 text-[0.68rem] uppercase tracking-[0.22em] transition-all duration-300",
                active === c
                  ? "border-primary bg-primary text-primary-foreground glow-ring"
                  : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-14 grid gap-12 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((e) => (
              <motion.article
                key={e.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col border border-border bg-card/40 backdrop-blur-sm transition-colors duration-500 hover:border-primary/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={e.image}
                    alt={`${e.name} poster`}
                    loading="lazy"
                    className="h-[240px] w-full object-cover grayscale-[40%] transition-all duration-[1.2s] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="absolute left-4 top-4 border border-primary/60 bg-background/70 px-3 py-1 text-[0.6rem] uppercase tracking-[0.24em] text-primary backdrop-blur">
                    {e.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-2xl">{e.name}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {e.description}
                  </p>

                  <dl className="mt-6 grid grid-cols-2 gap-y-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={14} className="text-primary" /> {e.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-primary" /> {e.venue}
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy size={14} className="text-primary" /> {e.prize}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-primary" /> Team {e.teamSize}
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-wrap gap-3 pt-2">
                    <MagneticButton to="/registration" variant="solid" className="px-5 py-2.5">
                      Register
                    </MagneticButton>
                    <MagneticButton variant="ghost" className="px-5 py-2.5">
                      View Details
                    </MagneticButton>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
