import type { ProfilePage } from 'schema-dts';

import workExperienceData from '@/data/work-experiences.json' assert { type: 'json' };

export const RESUME_PAGE: ProfilePage = {
  '@type': 'ProfilePage',
  name: '이력서',
  url: 'https://about.jinsu.kim/resume',
  description: 'item4라는 별명을 쓰는 한국인 개발자 김진수의 공개 이력서',
  about: {
    '@type': 'Person',
    '@id': 'https://about.jinsu.kim',
    name: '김진수',
    url: 'https://about.jinsu.kim',
    alternateName: ['item4'],
    image: 'https://about.jinsu.kim/item4.png',
    email: `mailto:resu${String.fromCodePoint(109, 101, 2 ** 6, 106)}insu.kim`,
    jobTitle: '웹 백엔드 개발자',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KR',
      addressRegion: '경기도',
      addressLocality: '부천시',
    },
    worksFor: workExperienceData.map((work) => {
      return {
        '@type': 'Organization',
        '@id': work.url,
        name: work.name,
        url: work.url,
      };
    }),
  },
  publisher: {
    '@type': 'Person',
    '@id': 'https://about.jinsu.kim',
  },
  mainEntity: {
    '@type': 'WebPageElement',
    '@id': 'https://about.jinsu.kim/resume',
    cssSelector: '.resume',
  },
};
