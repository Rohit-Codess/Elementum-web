import { heroAvatars } from "@/models/hero";
import Image from "next/image";

const desktopAvatarClassName =
	"absolute h-42 w-42 rounded-full border-[3px] border-background object-cover shadow-(--shadow-card)";

const desktopAvatarLayout = [
	"left-[2%] top-[96px]",
	"left-[18%] top-[50px]",
	"left-[34%] top-[16px]",
	"left-[50%] top-[96px]",
	"left-[66%] top-[48px]",
	"left-[82%] top-[16px]",
];

export function Hero() {
	const heroDisplayAvatars = heroAvatars.slice(0, 6);

	return (
		<section
			id="home"
			className="hero-section relative mx-auto w-full max-w-7xl px-4 pb-12 pt-10 sm:px-6 md:pt-14 lg:px-10"
		>
			<div className="hero-copy mx-auto max-w-5xl text-center">
				<h1 className="hero-heading font-gerbil text-foreground text-center">
					<span className="hero-line hero-line-underlined">The thinkers and</span>
					<span className="hero-line">
						doers were <span className="hero-highlight-pink">changing</span>
					</span>
					<span className="hero-line">
						the <span className="hero-highlight-green">status</span> Quo with
					</span>
				</h1>

				<p className="mx-auto mt-5 max-w-2xl text-center text-[0.95rem] leading-[1.72] text-(--secondary-text) sm:text-[1rem]">
					We are a team of strategists, designers, communicators, researchers.
					Together, we believe that progress only happens when you refuse to
					play things safe.
				</p>
			</div>

			<div className="hero-avatars-shell mt-12 md:mt-16">
				<div className="hidden md:block">
					<div className="hero-avatars-frame relative mx-auto h-72 w-full max-w-7xl overflow-visible lg:h-80">
						{heroDisplayAvatars.map((avatar, index) => (
							<Image
								key={avatar.id}
								src={avatar.image}
								alt={avatar.name}
								width={168}
								height={168}
								className={`${desktopAvatarClassName} ${desktopAvatarLayout[index]}`}
							/>
						))}
					</div>
				</div>

				<div className="relative md:hidden">
					<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-background to-transparent" />
					<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-background to-transparent" />

					<div className="hero-mobile-slider no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6">
						{heroDisplayAvatars.map((avatar, index) => {
							const shape = index % 3 === 0 ? "rounded-[1.55rem]" : "rounded-full";
							const tone =
								index % 2 === 0
									? "from-[#f8d585]/70 via-[#f9a8d4]/35 to-[#cde7d8]/50"
									: "from-[#cde7d8]/75 via-[#f7f7f7]/45 to-[#f4b43a]/35";

							return (
								<article
									key={`mobile-${avatar.id}`}
									className="relative min-w-[58%] snap-center sm:min-w-[40%]"
								>
									<div className={`rounded-3xl bg-linear-to-br p-1.5 shadow-[0_10px_20px_rgba(17,17,17,0.12)] ${tone}`}>
										<div className={`relative aspect-square overflow-hidden border-2 border-background bg-white ${shape}`}>
											<Image
												src={avatar.image}
												alt={avatar.name}
												fill
												className="object-cover"
												sizes="(max-width: 640px) 58vw, 40vw"
											/>
										</div>
									</div>
								</article>
							);
						})}
					</div>

					{/* <p className="mt-3 text-center text-[0.72rem] uppercase tracking-[0.22em] text-(--muted-text)">
						Swipe left or right
					</p> */}
				</div>
			</div>
		</section>
	);
}
