import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter } from "lucide-react";

import { images, teamGroups } from "@/data/samyak";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — SAMYAK" },
      {
        name: "description",
        content:
          "Meet the core team, coordinators, designers, technical crew, marketing and volunteers behind SAMYAK.",
      },
      { property: "og:title", content: "The team behind SAMYAK" },
      {
        property: "og:description",
        content: "Hundreds of students, one production. Meet the crew running SAMYAK.",
      },
    ],
  }),
  component: TeamPage,
});

const portraits = [images.g1, images.g3, images.g6, images.g2, images.g5, images.g4];

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="The team behind SAMYAK"
        description="Four hundred students across nine verticals, running a festival the size of a small city."
      />

      <div className="mx-auto max-w-[1400px] px-6 pb-32">
        {teamGroups.map((group, gi) => (
          <section key={group.title} className="pb-20">
            <Reveal>
              <div className="flex items-end justify-between border-b border-border pb-5">
                <h2 className="text-[clamp(1.6rem,3.5vw,2.75rem)]">{group.title}</h2>
                <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                  {String(gi + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {group.members.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.07}>
                  <figure className="group relative overflow-hidden">
                    <img
                      src={portraits[(gi + i) % portraits.length]}
                      alt={`${m.name}, ${m.role}`}
                      loading="lazy"
                      className="h-[320px] w-full object-cover grayscale transition-all duration-[1.2s] group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-5">
                      <p className="font-display text-xl">{m.name}</p>
                      <p className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-primary">
                        {m.role}
                      </p>
                      <div className="mt-4 flex gap-3 text-muted-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <a href="#" aria-label={`${m.name} on Instagram`} className="hover:text-foreground">
                          <Instagram size={16} />
                        </a>
                        <a href="#" aria-label={`${m.name} on LinkedIn`} className="hover:text-foreground">
                          <Linkedin size={16} />
                        </a>
                        <a href="#" aria-label={`${m.name} on Twitter`} className="hover:text-foreground">
                          <Twitter size={16} />
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
