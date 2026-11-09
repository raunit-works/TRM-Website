# Talkreach Media

A professional healthcare-focused marketing website built with Next.js, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing content

- Update navigation and business information in `src/data/site.ts`
- Update service cards in `src/data/services.ts`
- Update doctor reels in `src/data/portfolio.ts`
- Update founders in `src/data/founders.ts`
- Update the process timeline in `src/data/process.ts`
- Update trust cards in `src/data/trust.ts`
- Update FAQ content in `src/data/faqs.ts`
- Change colour design tokens in `src/app/globals.css`

## Structure

- `src/app/page.tsx` composes the homepage sections
- `src/components/sections` keeps each major section independent
- `src/components/ui` contains reusable building blocks
- `src/data` stores structured content for easier future edits

## Notes

- Contact details and WhatsApp links are intentionally left blank when not supplied.
- The FAQ accordion and mobile nav are keyboard accessible.
- Any future metrics should be added only with approved, verified data.
