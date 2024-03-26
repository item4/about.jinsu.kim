import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { GOOGLE_ANALYTICS_MEASUREMENT_ID, site } from '@/core/constants';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css' assert { type: 'css' };
import 'the-new-css-reset/css/reset.css' assert { type: 'css' };
import '@/core/index.css' assert { type: 'css' };

const title = site.title;
const description = 'item4라는 별명을 쓰는 한국인 개발자 김진수의 자기소개 사이트';

export const metadata: Metadata = {
  metadataBase: new URL('https://about.jinsu.kim'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: title,
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
  title,
  description,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    pinterest: 'nopin',
  },
  referrer: 'no-referrer-when-downgrade',
  keywords: site.tags,
  verification: {
    google: 'ugqR2ABFvbdKXqPaS7hh5-0b4kSbF8jf2OWBkooJ-O0',
    other: {
      me: ['https://qdon.space/@item4'],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ko' prefix='og: https://ogp.me/ns#'>
      <body>{children}</body>
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_MEASUREMENT_ID} />
    </html>
  );
}
