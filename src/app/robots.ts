import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {},
    sitemap: 'https://about.jinsu.kim/sitemap.xml',
  };
}
