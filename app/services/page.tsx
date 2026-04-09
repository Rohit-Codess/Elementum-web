import { Navbar } from "@/components/home/Navbar";
import Image from "next/image";

const serviceCards = [
  {
    title: "Build Sprint",
    duration: "4-6 weeks",
    description:
      "High-speed delivery for MVP websites with a production-ready architecture baseline.",
  },
  {
    title: "Scale Sprint",
    duration: "8-10 weeks",
    description:
      "Design system expansion, route architecture cleanup, and performance hardening.",
  },
  {
    title: "Steady Support",
    duration: "Monthly",
    description:
      "Ongoing improvements, security updates, and content releases with low overhead.",
  },
];

const servicePrinciples = [
  "Composable page modules for faster onboarding.",
  "Accessibility checks integrated into delivery.",
  "Security headers and safe defaults by design.",
  "Clear naming and folder architecture for maintainability.",
];

const serviceWorkflow = [
  {
    step: "01",
    title: "Discovery",
    text: "We map business goals, content gaps, technical risks, and the right delivery cadence.",
  },
  {
    step: "02",
    title: "System Design",
    text: "We define a visual language, route architecture, and content hierarchy that can scale.",
  },
  {
    step: "03",
    title: "Build & Review",
    text: "We implement modular sections, run QA, and tighten security and performance before launch.",
  },
];

const serviceGallery = [
  {
    src: "https://i.pravatar.cc/900?img=60",
    title: "Strategy Board",
    text: "Content flow, business intent, and launch milestones.",
  },
  {
    src: "https://i.pravatar.cc/900?img=24",
    title: "Workshop Notes",
    text: "Research, feedback loops, and decision capture.",
  },
  {
    src: "https://i.pravatar.cc/900?img=49",
    title: "System Review",
    text: "Component consistency and handoff clarity.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-background">
      <Navbar />

      <main id="services" className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:gap-14">
        <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-(--secondary-text)">Services</p>
            <h1 className="mt-3 font-gerbil text-balance text-[clamp(2.3rem,8vw,5.2rem)] leading-[0.94] text-foreground">
              Launch support that feels like a complete website
            </h1>
            <p className="mt-5 max-w-3xl text-[0.98rem] leading-[1.78] text-(--secondary-text) sm:text-[1.04rem]">
              Service tracks designed for teams at different growth stages. We pair home-page style storytelling with practical delivery systems so every engagement feels clear, visual, and easy to scale.
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-(--secondary-text)">
              {[
                { value: "12+", label: "systems shipped" },
                { value: "4x", label: "faster handoff clarity" },
                { value: "99%", label: "design consistency" },
              ].map((metric) => (
                <span key={metric.label} className="flex items-baseline gap-2 border-b border-(--border-light) pb-1">
                  <strong className="font-gerbil text-[1.7rem] leading-none text-foreground">{metric.value}</strong>
                  <span>{metric.label}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-72 overflow-hidden lg:min-h-120">
            <Image
              src="https://i.pravatar.cc/900?img=67"
              alt="Service planning and workshop collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </section>

        <section className="border-t border-(--border-light) pt-6 sm:pt-8">
          <div className="grid gap-0 md:grid-cols-3 md:gap-8">
            {serviceCards.map((card) => (
              <article key={card.title} className="border-b border-(--border-light) py-5 md:border-b-0 md:border-l md:border-(--border-light) md:px-5 md:py-0">
                <p className="text-xs uppercase tracking-[0.16em] text-(--secondary-text)">{card.duration}</p>
                <h2 className="mt-3 font-gerbil text-[1.75rem] leading-[0.95] text-foreground sm:text-[2rem]">{card.title}</h2>
                <p className="mt-3 max-w-sm text-[0.96rem] leading-[1.7] text-(--secondary-text)">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="border-t border-(--border-light) pt-6 sm:pt-8">
            <h2 className="font-gerbil text-[clamp(1.9rem,5vw,2.4rem)] leading-[0.95] text-foreground">How the service process works</h2>
            <div className="mt-5 grid gap-0">
              {serviceWorkflow.map((item) => (
                <article key={item.title} className="border-b border-(--border-light) py-4 last:border-b-0">
                  <p className="text-xs uppercase tracking-[0.16em] text-(--secondary-text)">Step {item.step}</p>
                  <h3 className="mt-2 font-gerbil text-[1.6rem] leading-none text-foreground">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-[0.95rem] leading-[1.7] text-(--secondary-text)">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="border-t border-(--border-light) pt-6 sm:pt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {serviceGallery.map((item) => (
                <article key={item.title} className="overflow-hidden">
                  <div className="relative h-56 w-full sm:h-60 lg:h-56">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-(--secondary-text)">{item.title}</p>
                  <p className="mt-2 max-w-sm text-[0.94rem] leading-[1.7] text-(--secondary-text)">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-(--border-light) pt-6 sm:pt-8">
          <h2 className="font-gerbil text-[clamp(1.9rem,5vw,2.4rem)] leading-[0.95] text-foreground">Service Guarantees</h2>
          <div className="mt-5 grid gap-0 sm:grid-cols-2">
            {servicePrinciples.map((item) => (
              <div key={item} className="border-b border-(--border-light) py-4 pr-0 text-[0.95rem] leading-[1.65] text-(--secondary-text) sm:border-b-0 sm:border-l sm:border-(--border-light) sm:px-5">
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
