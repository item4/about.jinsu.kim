import type { Metadata } from 'next';

import Layout from '@/components/Layout';
import { site } from '@/core/constants';

const title = `파트타임 - ${site.title}`;
const description = 'item4가 진행하는 파트타임 일거리에 대한 소개';

export const metadata: Metadata = {
  alternates: {
    canonical: '/parttime/',
  },
  title,
  description,
  robots: {
    index: false,
  },
  openGraph: {
    siteName: site.title,
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
};
export default function PartTimePage() {
  return (
    <Layout>
      <h1>파트타임</h1>
      <section>
        <h2>안내사항</h2>
        <p>관련 활동을 중단하였습니다.</p>
      </section>
    </Layout>
  );
}
