/**
 * Robots.txt Generator – Hausarztpraxis Felsenau Wald ZH
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

const CANONICAL = 'https://praxis-felsenau.ch';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
        ],
      },
    ],
    sitemap: `${CANONICAL}/sitemap.xml`,
  };
}
