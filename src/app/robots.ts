import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {},
    sitemap: 'https://about.jinsu.kim/sitemap.xml',
  };
}
