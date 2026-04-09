"use client";

import { useState } from "react";
import Image from "next/image";
import { primaryNavigation } from "@/models/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-40 w-full px-6 pt-6 sm:px-8 lg:px-14">
      <div className="mx-auto w-full max-w-7xl">
        <nav aria-label="Main navigation" className="flex items-center justify-between">
          <a href="#home" className="inline-flex items-center" aria-label="Elementum home">
            <Image
              src="/logo.png"
              alt="Elementum"
              width={220}
              height={56}
              className="h-10 w-auto sm:h-18 lg:h-20"
              priority
            />
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {primaryNavigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-flex items-center justify-center text-sm font-medium text-foreground transition-colors duration-200 hover:text-(--accent-purple) lg:text-[0.95rem]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setIsOpen((prev) => !prev)}
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border-light) text-foreground transition-colors hover:bg-(--card-background) md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                  isOpen ? "translate-y-1.75 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.75 h-0.5 w-5 bg-current transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3.5 h-0.5 w-5 bg-current transition-transform duration-300 ${
                  isOpen ? "-translate-y-1.75 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-50 md:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        />

        <aside
          id="mobile-nav-drawer"
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-85 flex-col border-l border-(--border-light) bg-background p-6 shadow-[-12px_0_24px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <Image
              src="/logo.png"
              alt="Elementum"
              width={170}
              height={44}
              className="h-18 w-auto"
            />
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border-light) text-foreground transition-colors hover:bg-(--card-background)"
            >
              <span className="relative block h-4 w-4">
                <span className="absolute left-0 top-1.75 h-0.5 w-4 rotate-45 bg-current" />
                <span className="absolute left-0 top-1.75 h-0.5 w-4 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <ul className="grid gap-1 rounded-2xl border border-(--border-light) bg-(--card-background) p-2 shadow-(--shadow-card)">
            {primaryNavigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-(--accent-green)"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </header>
  );
}
