const offerRows = [
  {
    label: "Office of multiple\ninterest content",
    title: "Colaborative & partnership",
  },
  {
    label: "The hanger US Air force\ndigital experimental",
    title: "We talk about our weight",
  },
  {
    label: "Delta faucet content,\nsocial, digital",
    title: "Piloting digital confidence",
  },
];

export function OfferSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-10">
      <div className="relative">
        <div className="max-w-3xl">
          <h2 className="section-heading-match-hero font-gerbil text-[clamp(2.2rem,4.4vw,4.4rem)] leading-[0.98] tracking-[0.01em] text-foreground">
            What we <span className="next-highlight">can</span>
            <br />
            <span className="next-underline">offer</span> you!
          </h2>
        </div>

        <div className="pointer-events-none absolute -top-4 right-0 hidden h-44 w-[46%] lg:block">
          <svg viewBox="0 0 600 220" className="h-full w-full" aria-hidden>
            <path
              d="M5 170 C 85 205, 120 185, 140 120 C 160 58, 205 20, 285 20 C 355 20, 430 65, 500 80 C 558 92, 590 55, 600 20"
              fill="none"
              stroke="#b8b8b8"
              strokeOpacity="0.35"
              strokeWidth="8"
              strokeLinecap="round"
              filter="url(#curveShadow)"
            />
            <path
              d="M0 164 C 80 199, 116 180, 136 114 C 156 52, 202 14, 284 14 C 354 14, 429 59, 500 74 C 560 86, 592 49, 600 14"
              fill="none"
              stroke="#ff7474"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <filter id="curveShadow" x="-20%" y="-20%" width="150%" height="150%">
                <feGaussianBlur stdDeviation="2.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="mt-12 border-y border-[#cfcfcf]">
        {offerRows.map((row, index) => (
          <article
            key={row.title}
            className={`grid items-center gap-5 py-5 md:grid-cols-[220px_1fr_auto] md:gap-8 ${
              index < offerRows.length - 1 ? "border-b border-[#cfcfcf]" : ""
            }`}
          >
            <p className="whitespace-pre-line text-sm leading-[1.35] text-[#343434] sm:text-[0.95rem]">
              {row.label}
            </p>

            <div className="relative">
              <h3 className="font-gerbil text-[clamp(1.7rem,3.4vw,3rem)] leading-[1.02] tracking-[0.01em] text-foreground">
                {row.title}
              </h3>
              {index === 2 ? (
                <span
                  aria-hidden
                  className="absolute -right-2 -top-2 h-16 w-16 rounded-full bg-[radial-gradient(circle_at_34%_36%,#d2ff3e_0_22%,#ffb800_23%_48%,#ff7a00_49%_70%,#000000_71%_100%)] sm:h-19 sm:w-19"
                />
              ) : null}
            </div>

            <a
              href="#"
              className="inline-flex items-center text-[1.8rem] leading-none text-foreground transition-opacity hover:opacity-70 sm:text-[2rem]"
              aria-label={`Read more about ${row.title}`}
            >
              <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
