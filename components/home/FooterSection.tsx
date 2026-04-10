const footerColumns = [
  {
    heading: "Company",
    items: ["Home", "Studio", "Service", "Blog"],
  },
  {
    heading: "Terms & Policies",
    items: ["Privacy Policy", "Terms & Conditions", "Explore", "Accesibility"],
  },
  {
    heading: "Follow Us",
    items: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  },
  {
    heading: "Terms & Policies",
    items: [
      "Lalpur",
      "Ranchi, Jharkhand 834001",
      "1234567890",
      "info@elementum.com",
    ],
  },
];

export function FooterSection() {
  return (
    <section className="mt-8 bg-(--footer-background)">
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-6 pt-12 sm:px-6 lg:px-10 lg:pt-18">
        <div className="pointer-events-none absolute left-[35%] top-0 hidden -translate-y-8 lg:block">
          <svg viewBox="0 0 180 80" className="h-20 w-44" aria-hidden>
            <path
              d="M20 10 C 35 24, 40 38, 28 52"
              fill="none"
              stroke="#ff7373"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M92 0 C 108 15, 112 30, 100 44"
              fill="none"
              stroke="#ff7373"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M28 52 l-8 -6" fill="none" stroke="#ff7373" strokeWidth="2" />
            <path d="M100 44 l-8 -6" fill="none" stroke="#ff7373" strokeWidth="2" />
          </svg>
        </div>

        <span className="pointer-events-none absolute right-6 top-20 hidden lg:block" aria-hidden>
          <svg viewBox="0 0 130 170" className="h-40 w-30">
            <path d="M124 12 A 100 100 0 0 0 20 168 L 124 12 Z" fill="#8b5cf6" />
          </svg>
        </span>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading-match-hero font-gerbil text-[clamp(2rem,7vw,4.6rem)] leading-[0.98] tracking-[0.01em] text-foreground sm:text-[clamp(2.5rem,5.5vw,4.6rem)] sm:leading-[0.95]">
            Subscribe to
            <br />
            our newsletter
          </h2>

          <p className="mt-3 text-[0.8rem] leading-normal text-[#2e3a34] sm:mt-4 sm:text-[0.95rem] sm:leading-[1.6]">
            To make your stay special and even more memorable
          </p>

          <button
            type="button"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5 sm:mt-7 sm:px-8 sm:py-3.5 sm:text-sm"
          >
            Subscribe Now
          </button>
        </div>

        <hr className="mt-12 border-[#7f8f86] sm:mt-16" />

        <div className="grid gap-8 pb-10 pt-8 sm:grid-cols-2 sm:gap-10 sm:pb-14 sm:pt-10 lg:grid-cols-4">
          {footerColumns.map((column, columnIndex) => (
            <div key={`${column.heading}-${columnIndex}`}>
              <h3 className="font-gerbil text-[1.2rem] leading-none tracking-[0.01em] text-foreground sm:text-[1.5rem]">
                {column.heading}
              </h3>

              <ul className="mt-3 grid gap-2 sm:mt-5 sm:gap-3">
                {column.items.map((item, itemIndex) => (
                  <li key={`${column.heading}-${columnIndex}-${itemIndex}`} className="text-[0.75rem] leading-[1.35] text-[#2f3d35] sm:text-sm sm:leading-[1.45] sm:text-[0.95rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-[0.68rem] text-[#435148] sm:text-xs sm:text-[0.9rem]">
          @2026 Elementum. All rights reserved
        </p>
      </div>
    </section>
  );
}
