import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Every crawler is welcome, including AI search and training crawlers. They
// are listed by name so the intent is explicit and easy to change: to block
// one, move it to its own group with "Disallow: /".
const aiCrawlers = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google (Gemini training and grounding)
  'Google-Extended',
  // Apple Intelligence
  'Applebot-Extended',
  // Others
  'Amazonbot',
  'meta-externalagent',
  'DuckAssistBot',
  'MistralAI-User',
  'cohere-ai',
  'CCBot',
];

export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    '# AI crawlers: explicitly allowed',
    ...aiCrawlers.map((bot) => `User-agent: ${bot}`),
    'Allow: /',
    '',
    `Sitemap: ${site.url}/sitemap-index.xml`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
