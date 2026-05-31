# Leaf & Life

A compact Next.js app for matching users with houseplants through a short adaptive quiz and subscription checkout.

[Live Preview]([url](https://leaf-and-life.vercel.app/))

## What it does

- Landing page with hero and service highlights
- Multi-step quiz for light, watering, pets, size, climate, and experience
- Checkout page with three subscription plans
- Form submission with mock payment success modal
- Analytics via Amplitude

## Structure

- `src/app/page.tsx` — Home page
- `src/app/quiz/page.tsx` — Quiz flow
- `src/app/quiz/checkout/page.tsx` — Checkout form
- `src/hooks/useQuiz.ts` — Quiz state persistence
- `src/data/quizSteps.json` — Quiz questions and interstitials
- `src/data/plans.json` — Subscription options

## Tech

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Zustand
- React IMask
- Amplitude

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes

- Add `NEXT_PUBLIC_AMPLITUDE_API_KEY` in `.env.local` for analytics
- Remote images are allowed in `next.config.ts`
