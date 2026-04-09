import Image from "next/image";

const sideAvatars = {
  left: [
    { id: 1, src: "https://i.pravatar.cc/140?img=12", className: "left-2 top-24 h-16 w-16" },
    { id: 2, src: "https://i.pravatar.cc/140?img=24", className: "left-18 top-0 h-20 w-20" },
    { id: 3, src: "https://i.pravatar.cc/140?img=31", className: "left-0 top-56 h-14 w-14" },
    { id: 4, src: "https://i.pravatar.cc/260?img=49", className: "left-22 top-32 h-36 w-36" },
  ],
  right: [
    { id: 5, src: "https://i.pravatar.cc/140?img=63", className: "right-16 top-8 h-16 w-16" },
    { id: 6, src: "https://i.pravatar.cc/140?img=9", className: "right-4 top-0 h-20 w-20" },
    { id: 7, src: "https://i.pravatar.cc/140?img=56", className: "right-24 top-36 h-16 w-16" },
    { id: 8, src: "https://i.pravatar.cc/260?img=14", className: "right-0 top-58 h-38 w-38" },
  ],
};

function Avatar({ src, className }: { src: string; className: string }) {
  return (
    <div className={`absolute overflow-hidden rounded-full border-2 border-background shadow-(--shadow-card) ${className}`}>
      <Image src={src} alt="Client avatar" fill className="object-cover" sizes="120px" />
    </div>
  );
}

export function TestimonialSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="section-heading-match-hero font-gerbil text-[clamp(1.9rem,3.9vw,3.6rem)] leading-none tracking-[0.01em] text-foreground">
          <span className="next-highlight">What</span> our customer
          <br />
          says <span className="next-underline">About Us</span>
        </h2>
      </div>

      <div className="relative mx-auto mt-10 max-w-5xl">
        <div className="hidden md:block">
          {sideAvatars.left.map((avatar) => (
            <Avatar key={avatar.id} src={avatar.src} className={avatar.className} />
          ))}

          {sideAvatars.right.map((avatar) => (
            <Avatar key={avatar.id} src={avatar.src} className={avatar.className} />
          ))}
        </div>

        <article className="relative mx-auto max-w-2xl rounded-4xl bg-(--soft-bg) px-5 py-7 text-center shadow-[0_6px_18px_rgba(0,0,0,0.04)] sm:px-7 sm:py-9 md:px-12 md:py-10">
          <p className="absolute left-4 top-3 text-5xl leading-none text-[#c8cdca] sm:text-6xl">“</p>
          <p className="absolute bottom-0 right-8 text-5xl leading-none text-[#c8cdca] sm:text-6xl">”</p>

          <p className="mx-auto max-w-xl text-[0.8rem] leading-[1.55] text-[#2f2f2f] sm:text-sm sm:leading-[1.65] sm:text-[0.98rem] md:text-[1rem]">
            Elementum delivered the site with in the timeline as they requested.
            Inthe end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn&apos;t used, which have also proved to
            be easy to use and reliable.
          </p>
        </article>
      </div>
    </section>
  );
}
