import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Pencil, Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  icon: React.ReactNode;
  price: string;
  sub: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: "amber" | "blue" | "purple";
  cta: string;
}

const tiers: PricingTier[] = [
  {
    name: "Open Inschrijving",
    icon: <Pencil className="h-6 w-6" />,
    price: "€2.950",
    sub: "p.p., incl. BTW",
    description: "Voor individuele professionals die in 3 dagen van begrip naar bouwer willen.",
    color: "amber",
    features: [
      "3-daagse hybride opleiding",
      "Volledige docentengids & lesmateriaal",
      "Lunch & koffie inbegrepen",
    ],
    cta: "Plan je gratis intake",
  },
  {
    name: "Team / In-company",
    icon: <Star className="h-6 w-6" />,
    price: "Op aanvraag",
    sub: "vanaf 6 deelnemers",
    description: "De volledige opleiding op locatie, aangepast aan de cases van jouw organisatie.",
    color: "blue",
    popular: true,
    features: [
      "Programma op maat van jouw sector",
      "Eigen cases & data als oefenmateriaal",
      "Maatwerk Demo Day briefings",
      "Volledige lesmaterialen voor het team",
      "Optionele follow-up sessie",
    ],
    cta: "Vraag offerte aan",
  },
  {
    name: "Train-de-trainer",
    icon: <Sparkles className="h-6 w-6" />,
    price: "€4.950",
    sub: "incl. licentie",
    description: "Voor opleiders en consultants die zelf de Weclairify-opleiding willen geven.",
    color: "purple",
    features: [
      "Volledige docentengids met lesplannen",
      "Licentie voor onbeperkt gebruik",
      "Alle slides, werkbladen & oefeningen",
      "Updates van het lesmateriaal",
      "Train-de-trainer begeleidingsdag",
    ],
    cta: "Plan je gratis intake",
  },
];

const colorMap = {
  amber: "bg-amber-400 text-amber-950",
  blue: "bg-sky-400 text-sky-950",
  purple: "bg-purple-400 text-purple-950",
};

export function Pricing() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="pakketten" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">Pakketten</span>
          <div className="relative mt-4 inline-block">
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Eenmalige investering,{" "}
              <span className="accent-italic">levenslang profijt</span>.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => {
            const isActive = active === tier.name;
            return (
              <div
                key={tier.name}
                className="relative cursor-pointer"
                style={{ transition: "transform 0.2s ease, z-index 0s" }}
                onClick={() => setActive(isActive ? null : tier.name)}
              >
                {/* Shadow — shrinks when active */}
                <div
                  className="absolute inset-0 rounded-none bg-foreground"
                  style={{
                    transform: isActive
                      ? "translate(0px, 0px)"
                      : "translate(4px, 4px)",
                    transition: "transform 0.2s ease",
                  }}
                />

                {/* Card */}
                <div
                  className={cn(
                    "relative h-full rounded-none border-2 border-foreground bg-card p-6 flex flex-col",
                    isActive && "ring-2 ring-primary ring-offset-2"
                  )}
                  style={{
                    transform: isActive
                      ? "translate(-3px, -6px) scale(1.02)"
                      : "translate(0px, 0px) scale(1)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    boxShadow: isActive ? "0 20px 40px oklch(0 0 0 / 0.15)" : "none",
                  }}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded border-2 border-foreground bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                      Meest gekozen!
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-sm border-2 border-foreground",
                        colorMap[tier.color]
                      )}
                    >
                      {tier.icon}
                    </div>
                    <div>
                      <div className="font-display text-xl font-bold">{tier.name}</div>
                      <div className="text-sm text-muted-foreground">{tier.description}</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold">{tier.price}</span>
                    <span className="text-sm text-muted-foreground">{tier.sub}</span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3 border-t-2 border-dashed border-foreground/20 pt-6 text-sm">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="mt-8 rounded-sm border-2 border-foreground bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href="#intake">{tier.cta}</a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
