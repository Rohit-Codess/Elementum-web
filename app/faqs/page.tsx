import { Navbar } from "@/components/home/Navbar";
import Image from "next/image";

const faqGroups = [
  {
    category: "Delivery",
    items: [
      {
        q: "How long does a standard website delivery take?",
        a: "Most marketing websites ship in 4 to 8 weeks depending on revision cycles and integration scope.",
      },
      {
        q: "Can we release pages one by one?",
        a: "Yes. We can ship route-by-route in staged releases while keeping shared design tokens aligned.",
      },
    ],
  },
  {
    category: "Architecture",
    items: [
      {
        q: "What stack and architecture patterns are recommended?",
        a: "Next.js App Router with modular page sections, route-level ownership, and minimal dependencies for long-term maintainability.",
      },
      {
        q: "How do you keep the codebase easy for new developers?",
        a: "Clear folders, reusable primitives, naming consistency, and lightweight abstractions instead of deep indirection.",
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        q: "How is security handled for static and dynamic content?",
        a: "We apply secure HTTP headers, sanitize user input paths, and avoid unnecessary client-side exposure of secrets.",
      },
      {
        q: "Do you include accessibility checks as part of QA?",
        a: "Yes. Accessibility checks are built into implementation and reviewed before each release milestone.",
      },
    ],
  },
];

const faqHighlights = [
  { label: "Average turnaround", value: "4-8 weeks" },
  { label: "Review cadence", value: "Weekly" },
  { label: "Security baseline", value: "Headers + validation" },
];

const faqKnowledge = [
  {
    topic: "Why modular pages matter",
    detail: "When a page is built from clear sections, teams can update, test, and reuse parts without breaking the rest of the site.",
  },
  {
    topic: "Why image storytelling helps",
    detail: "Images add context quickly and improve perceived quality, especially on marketing pages where clarity matters.",
  },
  {
    topic: "Why FAQs should be grouped",
    detail: "Grouping questions by topic helps visitors find answers faster and keeps the page easier to scan.",
  },
  {
    topic: "Why security belongs in FAQs",
    detail: "Technical trust is part of the customer experience, so clear security answers can reduce friction early.",
  },
];

export default function FaqsPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-background">
      <Navbar />

      <main id="faqs" className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:gap-14">
        <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-(--secondary-text)">FAQs</p>
            <h1 className="mt-3 font-gerbil text-balance text-[clamp(2.3rem,8vw,5.2rem)] leading-[0.94] text-foreground">
              Answers that build trust
            </h1>
            <p className="mt-5 max-w-3xl text-[0.98rem] leading-[1.78] text-(--secondary-text) sm:text-[1.04rem]">
              Frequently asked questions organized by delivery, architecture, and security. We keep answers direct so visitors can move from curiosity to action quickly.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--secondary-text)">
              {faqHighlights.map((item) => (
                <span key={item.label} className="flex items-baseline gap-2 border-b border-(--border-light) pb-1">
                  <strong className="font-gerbil text-[1.55rem] leading-none text-foreground">{item.value}</strong>
                  <span>{item.label}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-72 overflow-hidden lg:min-h-120">
            <Image
              src="https://i.pravatar.cc/900?img=31"
              alt="FAQ and support knowledge visual"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </section>

        <section className="border-t border-(--border-light) pt-6 sm:pt-8">
          <div className="grid gap-0 md:grid-cols-3 md:gap-8">
          {faqGroups.map((group) => (
            <article key={group.category} className="border-b border-(--border-light) py-5 md:border-b-0 md:border-l md:border-(--border-light) md:px-5 md:py-0">
              <h2 className="font-gerbil text-[1.6rem] leading-[0.95] text-foreground sm:text-[1.8rem]">{group.category}</h2>
              <div className="mt-5 grid gap-0">
                {group.items.map((item) => (
                  <details key={item.q} className="border-b border-(--border-light) py-4 last:border-b-0">
                    <summary className="cursor-pointer list-none text-[0.95rem] leading-normal text-foreground marker:hidden">
                      {item.q}
                    </summary>
                    <p className="mt-3 max-w-md text-[0.92rem] leading-[1.7] text-(--secondary-text)">{item.a}</p>
                  </details>
                ))}
              </div>
            </article>
          ))}
          </div>
        </section>

        <section className="border-t border-(--border-light) pt-6 sm:pt-8">
          <h2 className="font-gerbil text-[clamp(1.9rem,5vw,2.4rem)] leading-[0.95] text-foreground">FAQ Knowledge</h2>
          <p className="mt-3 max-w-3xl text-[0.97rem] leading-[1.65] text-(--secondary-text)">
            These notes explain why certain page structures and answers are useful for both visitors and developers.
          </p>

          <div className="mt-6 grid gap-0">
            {faqKnowledge.map((item) => (
              <article key={item.topic} className="grid gap-2 border-t border-(--border-light) py-5 sm:grid-cols-[0.42fr_1fr] sm:gap-6">
                <h3 className="font-gerbil text-[1.45rem] leading-none text-foreground sm:text-[1.7rem]">{item.topic}</h3>
                <p className="text-[0.95rem] leading-[1.7] text-(--secondary-text)">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
