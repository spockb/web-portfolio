import type { APIRoute } from 'astro';
import { site, stats, homeFaqs } from '../data/site';
import { jobs, formats } from '../data/services';
import { work } from '../data/work';

// A plain-text summary of the site for AI assistants (llmstxt.org format).
export const GET: APIRoute = () => {
  const lines = [
    `# ${site.brand}`,
    '',
    `> ${site.description}`,
    '',
    `${site.name} is a remote audio post-production engineer based in the United States who repairs, edits, mixes and masters spoken audio: YouTube shows, podcasts, guided meditations, courses, narration and one-off recordings such as interviews and business videos. He specializes in difficult dialogue: multiple lavalier mics, wind, room echo, background noise and mic bleed. He edits audio (mic cleanup, noise and overlap removal), not content (story or length cuts). He offers a free assessment of a sample clip. Former in-house engineer at TMG Studios (2018–2021). Typical turnaround is ${site.turnaround}; rush is available. Pricing is a flat quote per project or episode.`,
    '',
    `Key facts: ${stats.map((s) => `${s.value} ${s.label}`).join('; ')}.`,
    '',
    '## Services',
    '',
    ...jobs.map(
      (s) => `- [${s.name}](${site.url}/services/${s.slug}/): ${s.short} From $${s.priceFrom} ${s.priceUnit}.`,
    ),
    '',
    '## By type of project',
    '',
    ...formats.map(
      (s) => `- [${s.name}](${site.url}/services/${s.slug}/): ${s.short} From $${s.priceFrom} ${s.priceUnit}.`,
    ),
    '',
    '## Work',
    '',
    ...work.map((w) => `- [${w.title}](${site.url}/work/${w.slug}/): ${w.client}. ${w.summary}`),
    '',
    '## Common questions',
    '',
    ...homeFaqs.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
    '## More',
    '',
    `- [Pricing](${site.url}/pricing/): starting prices and what affects a quote`,
    `- [About](${site.url}/about/): background and experience`,
    `- [Get a quote](${site.url}/contact/): quote request form. Email: ${site.email}`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
