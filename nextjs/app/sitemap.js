/**
 * Dynamic Sitemap Generator – Hausarztpraxis Felsenau Wald ZH
 * Generates /sitemap.xml automatically with current lastmod.
 */

import { SERVICES, TEAM } from '@/data/siteData';
import { SERVICES_DETAILED } from '@/data/servicesDetailedData';

const BASE_URL = 'https://praxis-felsenau.ch';

export default function sitemap() {
  const currentDate = new Date();

  /* ── Static pages ── */
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];

  /* ── Dynamic service pages (all available services) ── */
  const allServiceSlugs = Array.from(
    new Set([...SERVICES.map((s) => s.slug), ...Object.keys(SERVICES_DETAILED)])
  );
  const servicePages = allServiceSlugs.map((slug) => ({
    url: `${BASE_URL}/leistungen/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  /* ── Dynamic doctor profile pages ── */
  const doctorPages = TEAM.map((member) => ({
    url: `${BASE_URL}/aerzte/${member.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages, ...doctorPages];
}
