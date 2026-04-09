import Image from "next/image";

export function FeatureSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-[34%] hidden lg:block">
        <svg
          viewBox="0 0 1200 360"
          className="h-90 w-full"
          aria-hidden
          preserveAspectRatio="none"
        >
          <path
            d="M320 120 C 430 40, 600 40, 700 120 S 960 220, 1060 150"
            fill="none"
            stroke="#ff7373"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 space-y-18">
        <article className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
          <div className="max-w-xl">
            <h2 className="section-heading-match-hero font-gerbil text-[clamp(1.9rem,3.6vw,3.4rem)] leading-[1.08] tracking-[0.01em] text-foreground">
              <span className="next-underline">Tomorrow</span> should
              <br />
              be better than <span className="next-highlight">today</span>
            </h2>

            <p className="mt-4 max-w-lg text-[0.98rem] leading-[1.76] text-(--secondary-text) sm:text-[1.05rem]">
              We are a team of strategists, designers communicators, researchers.
              Together, we belive that progress only happens when you refuse to
              play things safe.
            </p>

            <a
              href="#"
              className="mt-5 inline-flex items-center gap-4 text-sm text-foreground transition-opacity hover:opacity-70 sm:text-base"
            >
              <span>Read more</span>
              <span aria-hidden className="h-px w-18 bg-[#111111]" />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-220px sm:max-w-107.5">
            <span
              aria-hidden
              className="absolute -right-4 top-8 h-26 w-26 rotate-12 bg-[#ff7373]"
            />
            <div className="relative aspect-square overflow-hidden rounded-full shadow-(--shadow-card)">
              <Image
                src="https://i.pravatar.cc/700?img=66"
                alt="Team in a strategy meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
          </div>
        </article>

        <article className="grid items-center gap-10 lg:grid-cols-[0.95fr_1fr] lg:gap-12">
          <div className="relative mx-auto w-full max-w-220px lg:max-w-107.5 lg:order-1">
            <span
              aria-hidden
              className="absolute -left-4 top-6 h-28 w-28 -rotate-30 bg-[#ff7373]"
            />
            <span
              aria-hidden
              className="absolute right-6 -bottom-6 h-30 w-30 rotate-0 bg-[#ff7373] [clip-path:polygon(50%_0,0_100%,100%_100%)]"
            />
            <div className="relative aspect-square overflow-hidden rounded-full shadow-(--shadow-card)">
              <Image
                src="https://i.pravatar.cc/700?img=12"
                alt="Team member planning next steps"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
          </div>

          <div className="max-w-xl lg:order-2">
            <h2 className="section-heading-match-hero font-gerbil text-[clamp(1.9rem,3.6vw,3.4rem)] leading-[1.08] tracking-[0.01em] text-foreground">
              <span className="next-highlight">See</span> how we can
              <br />
              help you <span className="next-underline">progress</span>
            </h2>

            <p className="mt-4 max-w-lg text-[0.98rem] leading-[1.76] text-(--secondary-text) sm:text-[1.05rem]">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>

            <a
              href="#"
              className="mt-5 inline-flex items-center gap-4 text-sm text-foreground transition-opacity hover:opacity-70 sm:text-base"
            >
              <span>Read more</span>
              <span aria-hidden className="h-px w-18 bg-[#111111]" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
