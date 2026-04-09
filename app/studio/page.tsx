import { Navbar } from "@/components/home/Navbar";
import Image from "next/image";

const studioCapabilities = [
  {
    title: "Identity Systems",
    detail:
      "Logo, typography, and brand expression crafted as reusable systems for digital products.",
  },
  {
    title: "Narrative Direction",
    detail:
      "Messaging frameworks that keep campaigns and product storytelling consistent across channels.",
  },
  {
    title: "Experience Prototyping",
    detail:
      "Fast prototypes used to validate interaction patterns before full implementation.",
  },
  {
    title: "Design Governance",
    detail:
      "Documentation and review loops that help teams scale quality without friction.",
  },
];

const studioWorkflow = [
  "Discovery sprint with stakeholders and user interviews.",
  "Visual direction exploration and concept alignment.",
  "Systemized UI kit and interaction patterns.",
  "Launch handoff with technical notes for developers.",
];

const studioStack = ["Figma", "Next.js", "Tailwind CSS", "Story Mapping", "A/B Testing", "WCAG"];

const studioGallery = [
  {
    src: "https://i.pravatar.cc/900?img=60",
    alt: "Studio team member capturing references",
    title: "Field Observation",
  },
  {
    src: "https://i.pravatar.cc/900?img=67",
    alt: "Creative collaborator smiling in studio",
    title: "Creative Direction",
  },
  {
    src: "https://i.pravatar.cc/900?img=14",
    alt: "Designer reviewing concept notes",
    title: "Interface Critique",
  },
];

const studioKnowledge = [
  {
    topic: "Design Systems",
    insight:
      "A design system is not only a UI kit. It is a shared language between product, design, and engineering teams.",
    impact: "Cuts rework and keeps releases visually consistent.",
  },
  {
    topic: "Accessibility",
    insight:
      "Accessibility should be built at component level: contrast, semantics, keyboard support, and focus states.",
    impact: "Improves usability for everyone and reduces legal risk.",
  },
  {
    topic: "Performance",
    insight:
      "Content-rich pages stay fast when images are optimized and sections are modularized with clear boundaries.",
    impact: "Better engagement, SEO quality, and smoother mobile experience.",
  },
  {
    topic: "Security Basics",
    insight:
      "Secure headers, strict input handling, and minimal client exposure are foundational for modern websites.",
    impact: "Protects brand trust and lowers avoidable security incidents.",
  },
];

export default function StudioPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-background">
      <Navbar />

      <main id="studio" className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:gap-14">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl pb-2">
            <p className="text-xs uppercase tracking-[0.22em] text-\(--secondary-text)">Studio</p>
            <h1 className="mt-3 font-gerbil text-balance text-[clamp(2.3rem,8vw,5.2rem)] leading-[0.94] tracking-[0.01em] text-foreground">
              A studio shaped by research, design, and clear systems
            </h1>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-[1.78] text-(--secondary-text) sm:text-[1.04rem]">
              We build visual systems that are expressive and practical. Every deliverable is structured so your internal team can maintain consistency as the product grows.
            </p>
          </div>

          <div className="relative min-h-72 overflow-hidden lg\:min-h-\[28rem\]">
            <Image
              src="https://i.pravatar.cc/1200?img=60"
              alt="Studio collaboration visual"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </section>

        <section className="border-t border-(--border-light) pt-6 sm:pt-8">
          <div className="grid gap-6 md:grid-cols-2">
          {studioCapabilities.map((item) => (
            <article key={item.title} className="border-b border-(--border-light) pb-5 md:border-b-0 md:border-l md:border-(--border-light) md:pl-5">
              <h2 className="font-gerbil text-[1.55rem] leading-none text-foreground sm:text-[1.75rem]">{item.title}</h2>
              <p className="mt-3 max-w-xl text-[0.95rem] leading-[1.7] text-(--secondary-text) sm:text-[1rem]">{item.detail}</p>
            </article>
          ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="border-t border-(--border-light) pt-6 sm:pt-8">
            <h2 className="font-gerbil text-[clamp(1.9rem,5vw,2.4rem)] leading-[0.95] text-foreground">How the studio works</h2>
            <ol className="mt-5 grid gap-0">
              {studioWorkflow.map((step, index) => (
                <li key={step} className="flex items-start gap-4 border-b border-(--border-light) py-4 last:border-b-0">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#111827] text-xs text-white">
                    {index + 1}
                  </span>
                  <span className="text-[0.96rem] leading-[1.7] text-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-t border-(--border-light) pt-6 sm:pt-8">
            <h3 className="font-gerbil text-[clamp(1.8rem,4vw,2rem)] leading-none text-foreground">Toolkit</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {studioStack.map((tool) => (
                <span key={tool} className="rounded-full border border-(--border-light) px-3 py-1 text-xs text-(--secondary-text)">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-(--border-light) pt-6 sm:pt-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-gerbil text-[clamp(1.9rem,5vw,2.4rem)] leading-[0.95] text-foreground">Inside the studio</h2>
            <p className="max-w-md text-left text-[0.92rem] leading-[1.55] text-(--secondary-text) sm:text-right">
              Real snapshots of collaboration, experimentation, and design thinking in action.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {studioGallery.map((item) => (
              <article key={item.title} className="overflow-hidden">
                <div className="relative h-64 w-full sm:h-72 lg:h-64">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-(--secondary-text)">{item.title}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-(--border-light) pt-6 sm:pt-8">
          <h2 className="font-gerbil text-[clamp(1.9rem,5vw,2.4rem)] leading-[0.95] text-foreground">Studio Knowledge</h2>
          <p className="mt-3 max-w-3xl text-[0.97rem] leading-[1.65] text-(--secondary-text)">
            Principles we apply on every project. These help teams make better product decisions with less confusion.
          </p>

          <div className="mt-6 grid gap-0">
            {studioKnowledge.map((item) => (
              <article key={item.topic} className="grid gap-2 border-t border-(--border-light) py-5 sm:grid-cols-[0.45fr_1fr] sm:gap-6">
                <h3 className="font-gerbil text-[1.5rem] leading-none text-foreground sm:text-[1.8rem]">{item.topic}</h3>
                <div>
                  <p className="text-[0.95rem] leading-[1.7] text-(--secondary-text)">{item.insight}</p>
                  <p className="mt-3 text-[0.88rem] leading-[1.55] text-foreground/75">
                  Why it matters: {item.impact}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
