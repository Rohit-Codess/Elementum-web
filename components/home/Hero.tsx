import { heroAvatars } from "@/models/hero";
import Image from "next/image";

const avatarHeightOffsets = [
	"translate-y-4",
	"translate-y-1",
	"-translate-y-2",
	"translate-y-2",
	"-translate-y-1",
	"-translate-y-2",
];

export function Hero() {
	const heroDisplayAvatars = heroAvatars.slice(0, 6);

	return (
		<section id="home">
			<div className="hero-shell relative overflow-hidden pb-28 pt-14 text-white sm:pt-16">
					<div className="hero-shell-grain absolute inset-0" aria-hidden="true" />
					<div className="hero-shell-glow hero-shell-glow-left" aria-hidden="true" />
					<div className="hero-shell-glow hero-shell-glow-right" aria-hidden="true" />

					<div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
						<div className="mx-auto max-w-4xl text-center">
							<h1 className="font-gerbil text-balance text-[clamp(2.05rem,5.95vw,4.9rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
							The innovators and
							<br />
							makers <span className="hero-cyan-glow">paving</span>
							<br />
							the <span className="hero-amber-glow">future</span> with
							<br />
							clarity.
							</h1>

							<p className="mx-auto mt-7 max-w-3xl text-[0.9rem] leading-[1.6] text-[#d5dde8] sm:text-[0.98rem] sm:leading-[1.68]">
								An integrated ecosystem of architects, developers, and visionaries,
								dedicated to a singular focus: to unlock hidden potential and
								realize exceptional value.
							</p>
						</div>
					</div>
				</div>

				<div className="relative z-20 -mt-16 mx-auto flex max-w-6xl justify-center px-2 sm:-mt-18 sm:px-4 lg:px-10">
					<ul className="flex items-end">
						{heroDisplayAvatars.map((avatar, index) => (
							<li
								key={avatar.id}
								className={`relative -ml-4 h-20 w-20 overflow-hidden rounded-full border-4 border-[#f5f5f5] shadow-[0_18px_28px_rgba(0,0,0,0.28)] first:ml-0 sm:-ml-5 sm:h-24 sm:w-24 md:h-28 md:w-28 ${avatarHeightOffsets[index]}`}
							>
								<Image
									src={avatar.image}
									alt={avatar.name}
									fill
									className="object-cover"
									sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
								/>
							</li>
						))}
					</ul>
				</div>
		</section>
	);
}
