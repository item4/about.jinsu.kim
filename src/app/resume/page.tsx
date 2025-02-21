import type { Metadata } from 'next';

import Layout from '@/components/Layout.tsx';
import NotablePointSection from '@/components/resume/NotablePointSection.tsx';
import OpensourceContributionSection from '@/components/resume/OpensourceContributionSection.tsx';
import ProfileSection from '@/components/resume/ProfileSection.tsx';
import ProjectSection from '@/components/resume/ProjectSection.tsx';
import SummarySection from '@/components/resume/SummarySection.tsx';
import WorkExperienceSection from '@/components/resume/WorkExperienceSection.tsx';
import { site } from '@/core/constants.ts';
import { RESUME_PAGE } from '@/core/structuredData.ts';

const title = `이력서 - ${site.title}`;
const description = '김진수(item4)의 공개 이력서';

export const metadata: Metadata = {
  alternates: {
    canonical: '/resume/',
  },
  title,
  description,
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

export default function ResumePage() {
  return (
    <Layout pageType='resume'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            ...RESUME_PAGE,
          }),
        }}
      />
      <h1>이력서</h1>
      <ProfileSection />
      <SummarySection />
      <WorkExperienceSection />
      <ProjectSection />
      <OpensourceContributionSection />
      <NotablePointSection />
    </Layout>
  );
}
