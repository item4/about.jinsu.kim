import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: 'https://about.jinsu.kim/',
      lastModified,
      priority: 0.8,
    },
    {
      url: 'https://about.jinsu.kim/resume/',
      lastModified,
      priority: 1,
    },
  ];
}
