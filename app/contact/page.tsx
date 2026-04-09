import { Navbar } from "@/components/home/Navbar";
import Image from "next/image";

const channels = [
  { label: "Email", value: "hello@elementum.com" },
  { label: "Phone", value: "+91 12345 67890" },
  { label: "Studio Hours", value: "Mon - Fri, 10:00 AM to 7:00 PM" },
  { label: "Head Office", value: "Lalpur, Ranchi, Jharkhand" },
];

const journey = [
  "Submit your project intent and constraints.",
  "Receive discovery call slots within one business day.",
  "Get execution proposal with milestones and ownership.",
  "Kick off with design and engineering sprint alignment.",
];

const contactKnowledge = [
  {
    topic: "Best First Message",
    detail: "Share your goal, deadline, audience, and current stack so we can route the request faster.",
  },
  {
    topic: "What We Need",
    detail: "A short brief, sample references, and any existing assets reduce back-and-forth.",
  },
  {
    topic: "Response Model",
    detail: "We aim for a business-day response window with a clear next action on every inquiry.",
  },
  {
    topic: "Security Note",
    detail: "Never send secrets through contact forms. Use secure sharing for sensitive implementation details.",
  },
];

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-background">
      <Navbar />

      <main id="contact" className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:gap-14">
        <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:flex-end">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-(--secondary-text)">Contact</p>
            <h1 className="mt-3 font-gerbil text-balance text-[clamp(2.3rem,8vw,5.2rem)] leading-[0.94] text-foreground">
              Start the conversation
            </h1>
            <p className="mt-5 max-w-3xl text-[0.98rem] leading-[1.78] text-(--secondary-text) sm:text-[1.04rem]">
              Let us know what you are building and where you need support. We keep communication transparent and convert ideas into practical project plans, much like a strong home page introduces a studio.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--secondary-text)">
              {[
                "Strategy calls",
                "Design reviews",
                "Architecture consultations",
                "Launch planning",
              ].map((item) => (
                <span key={item} className="border-b border-(--border-light) pb-1">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-72 overflow-hidden lg:min-h-120">
            <Image
              src="https://i.pravatar.cc/900?img=15"
              alt="Contact and collaboration visual"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </section>

        <section className="border-t border-(--border-light) pt-6 sm:pt-8">
          <div className="grid gap-0 sm:grid-cols-2 xl:grid-cols-4">
          {channels.map((item) => (
            <article key={item.label} className="border-b border-(--border-light) py-4 sm:border-b-0 sm:border-l sm:border-(--border-light) sm:px-5">
              <h2 className="text-xs uppercase tracking-[0.16em] text-(--secondary-text)">{item.label}</h2>
              <p className="mt-2 font-gerbil text-[1.5rem] leading-[1.05] text-foreground sm:text-[1.65rem]">{item.value}</p>
            </article>
          ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="border-t border-(--border-light) pt-6 sm:pt-8">
            <h2 className="font-gerbil text-[clamp(1.9rem,5vw,2.4rem)] leading-[0.95] text-foreground">How We Start</h2>
            <ol className="mt-5 grid gap-0">
              {journey.map((step, index) => (
                <li key={step} className="flex gap-4 border-b border-(--border-light) py-4 last:border-b-0">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#111111] text-xs text-white">
                    {index + 1}
                  </span>
                  <span className="text-[0.95rem] leading-[1.7] text-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <form className="border-t border-(--border-light) pt-6 sm:pt-8" aria-label="Contact inquiry form">
            <div className="grid gap-5">
              <label className="grid gap-2" htmlFor="name">
                <span className="text-sm text-(--secondary-text)">Your name</span>
                <input id="name" name="name" type="text" className="w-full border-b border-(--border-light) bg-transparent px-0 py-2 outline-none placeholder:text-(--muted-text)" placeholder="John Doe" />
              </label>

              <label className="grid gap-2" htmlFor="email">
                <span className="text-sm text-(--secondary-text)">Work email</span>
                <input id="email" name="email" type="email" className="w-full border-b border-(--border-light) bg-transparent px-0 py-2 outline-none placeholder:text-(--muted-text)" placeholder="john@company.com" />
              </label>

              <label className="grid gap-2" htmlFor="message">
                <span className="text-sm text-(--secondary-text)">Project brief</span>
                <textarea id="message" name="message" rows={5} className="w-full resize-none border-b border-(--border-light) bg-transparent px-0 py-2 outline-none placeholder:text-(--muted-text)" placeholder="Tell us your goals, deadline, and constraints." />
              </label>

              <button type="button" className="justify-self-start border-b border-foreground pb-1 text-sm font-medium text-foreground transition-opacity hover:opacity-70">
                Send Brief
              </button>
            </div>
          </form>
        </section>

        <section className="border-t border-(--border-light) pt-6 sm:pt-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-gerbil text-[clamp(1.9rem,5vw,2.4rem)] leading-[0.95] text-foreground">Contact Knowledge</h2>
            <p className="max-w-md text-left text-[0.92rem] leading-[1.55] text-(--secondary-text) sm:text-right">
              A few helpful notes that make contact requests clearer for both clients and developers.
            </p>
          </div>

          <div className="mt-6 grid gap-0">
            {contactKnowledge.map((item) => (
              <article key={item.topic} className="grid gap-2 border-t border-(--border-light) py-5 sm:grid-cols-[0.45fr_1fr] sm:gap-6">
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
