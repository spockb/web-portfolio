# garrettspach.com

Service site for Garrett Spach's remote audio post-production business. Built with Astro, deployed on Netlify.

## Commands

- `npm run dev` starts the local dev server
- `npm run build` builds the site into `dist/`
- `npm run preview` serves the built site

## Editing content

Almost all copy lives in three data files:

- `src/data/site.ts`: business details, stats, process steps, testimonials, before/after clips, home FAQs
- `src/data/services.ts`: the services (`kind: 'job'`) and project-type pages (`kind: 'format'`), including starting prices and FAQs
- `src/data/work.ts`: case studies and their YouTube videos

Adding an entry to `services.ts` or `work.ts` creates its page automatically.

## Placeholders

Testimonials marked `placeholder: true` and before/after entries without audio files show in `npm run dev` with a
dashed outline, and are left out of production builds. To publish them:

- Testimonials: replace the quote, name and role in `src/data/site.ts` and set `placeholder: false`.
- Before/after: put the clips in `public/audio/` and fill in the `before` and `after` paths in `src/data/site.ts`.

## SEO

- `src/pages/robots.txt.ts` allows all crawlers and lists AI crawlers by name
- `src/pages/llms.txt.ts` generates a summary for AI assistants
- The sitemap is generated at build time
- Structured data is set per page through the `schema` prop of `src/layouts/BaseLayout.astro`

## Forms

The quote form on `/contact/` uses Netlify Forms. After the first deploy, turn on email notifications for the
`quote` form in the Netlify dashboard.

`intake/` holds the asset checklist and original files. It is not part of the built site.
