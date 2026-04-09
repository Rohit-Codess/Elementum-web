# Elementum Website

A modern marketing website for Elementum, built to be clean, mobile-friendly, and easy to update.

## What This Website Includes

- Responsive layout for desktop, tablet, and mobile.
- Mobile sidebar navigation (opens from the side).
- Hero section with team images and touch-friendly mobile behavior.
- Content sections for story, services, testimonials, and newsletter.
- Branded footer with company links and contact information.

## Main Page Flow

The homepage is organized in this order:

1. Navbar
2. Hero section
3. Next section (story/content blocks)
4. Offer section (service highlights)
5. Testimonial section
6. Footer and newsletter

## Easy Content Update Guide

Use the files below when content needs to be changed:

- Navigation menu items: `models/navigation.ts`
- Hero avatar images: `models/hero.ts`
- Homepage section order: `app/page.tsx`
- Hero copy/layout: `components/hero/Hero.tsx`
- Story/next section content: `components/nextSection/NextSection.tsx`
- Offer section content: `components/offerSection/OfferSection.tsx`
- Testimonial content: `components/testimonialSection/TestimonialSection.tsx`
- Footer links and contact details: `components/footerSection/FooterSection.tsx`
- Global colors, spacing, typography: `app/globals.css`

## How To Run Locally

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Open in browser

`http://localhost:3000`

## Build For Production

```bash
npm run build
npm run start
```

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Notes For Client Handover

- All sections are component-based, so updates can be done section by section.
- Text, links, and image sources are easy to locate in the files listed above.
- The design is already optimized for mobile and tablet behavior.
