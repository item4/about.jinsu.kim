import type { Metadata } from 'next';

import Layout from '@/components/Layout';
import NotablePointSection from '@/components/resume/NotablePointSection';
import OpensourceContributionSection from '@/components/resume/OpensourceContributionSection';
import ProfileSection from '@/components/resume/ProfileSection';
import ProjectSection from '@/components/resume/ProjectSection';
import SummarySection from '@/components/resume/SummarySection';
import WorkExperienceSection from '@/components/resume/WorkExperienceSection';
import { site } from '@/core/constants';
import { RESUME_PAGE } from '@/core/structuredData';

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
