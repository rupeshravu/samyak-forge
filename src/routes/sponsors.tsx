import { createFileRoute } from "@tanstack/react-router";

import { sponsorTiers } from "@/data/samyak";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Partners — SAMYAK" },
      {
        name: "description",
        content:
          "Title, powered-by, gold, silver, associate and media partners of SAMYAK — plus how to partner with us.",
      },
      { property: "og:title", content: "Our partners — SAMYAK" },
      {
        property: "og:description",
        content: "Reach 10,000+ students across three days. Partner with SAMYAK.",
      },
    ],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Our partners"
        description="The brands that put the lights up. SAMYAK reaches 10,000+ students across 50+ campuses."
      />

      <div className="mx-auto max-w-[1400px] px-6 pb-24">
        {sponsorTiers.map((tier, ti) => (
          <section key={tier.tier} className="pb-16">
            <Reveal>
              <p className="eyebrow border-b border-border pb-4">{tier.tier}</p>
            </Reveal>
            <div
              className={`mt-8 grid gap-px bg-border ${
                ti === 0
                  ? "grid-cols-1"
                  : ti === 1
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-2 md:grid-cols-4"
              }`}
            >
              {tier.names.map((n, i) => (
                <Reveal key={n} delay={i * 0.05}>
                  <div
                    className={`group flex h-full items-center justify-center bg-background px-6 transition-colors duration-500 hover:bg-card ${
                      ti === 0 ? "py-20" : ti === 1 ? "py-14" : "py-10"
                    }`}
                  >
                    <span
                      className={`font-display tracking-[0.15em] text-muted-foreground transition-all duration-500 group-hover:text-ember ${
                        ti === 0 ? "text-4xl md:text-6xl" : ti === 1 ? "text-3xl" : "text-xl"
                      }`}
                    >
                      {n}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="border-y border-border py-28">
        <Reveal className="mx-auto max-w-[1400px] px-6 text-center">
          <p className="eyebrow">Become a sponsor</p>
          <h2 className="mt-6 text-[clamp(2rem,7vw,5.5rem)]">
            Put your brand
            <br />
            <span className="text-ember">on the main stage.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Custom activations, stage branding, workshop hosting and campus-wide visibility across
            three days of programming.
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton variant="solid">Partner With Us</MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
