import { Hero } from "@/components/home/Hero";
import { FeatureSection } from "@/components/home/FeatureSection";
import { OfferSection } from "@/components/home/OfferSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { FooterSection } from "@/components/home/FooterSection";
import { Navbar } from "@/components/home/Navbar";

const homeMetrics = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Avg. Launch Time", value: "36 Days" },
  { label: "Client Retention", value: "94%" },
  { label: "Global Partners", value: "16" },
];

const homeJourney = [
  {
    title: "Plan",
    text: "We clarify scope, constraints, and growth goals before writing production code.",
  },
  {
    title: "Design",
    text: "We craft a distinct visual direction and reusable UI patterns for future scale.",
  },
  {
    title: "Build",
    text: "We implement lightweight architecture, secure defaults, and launch-ready performance.",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-background">
      <Navbar />

      <main className="flex-1 pb-0">
        <Hero />
        <FeatureSection />
        <OfferSection />

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-10">
          <div className="grid gap-4 rounded-4xl bg-[#111827] p-6 text-white sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
            {homeMetrics.map((metric) => (
              <article key={metric.label} className="rounded-2xl border border-white/20 bg-white/5 px-4 py-4">
                <p className="font-gerbil text-[2.3rem] leading-none">{metric.value}</p>
                <p className="mt-2 text-[0.85rem] text-[#d8e2f2]">{metric.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6 lg:px-10">
          <div className="rounded-4xl border border-(--border-light) bg-(--card-background) p-6 sm:p-8">
            <h2 className="font-gerbil text-[clamp(2rem,5.6vw,4rem)] leading-[0.95] text-foreground">
              Built for Clarity
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {homeJourney.map((step) => (
                <article key={step.title} className="rounded-2xl bg-[#f5f8fa] p-4">
                  <h3 className="font-gerbil text-[1.7rem] leading-none text-foreground">{step.title}</h3>
                  <p className="mt-2 text-[0.94rem] leading-[1.6] text-(--secondary-text)">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TestimonialSection />
        <FooterSection />
      </main>
    </div>
  );
}
