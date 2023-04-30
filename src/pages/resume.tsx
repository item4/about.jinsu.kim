import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import NotablePointSection from '@/components/resume/NotablePointSection';
import OpensourceContributionSection from '@/components/resume/OpensourceContributionSection';
import ProfileSection from '@/components/resume/ProfileSection';
import SummarySection from '@/components/resume/SummarySection';
import WorkExperienceSection from '@/components/resume/WorkExperienceSection';
import { RESUME_PAGE } from '@/core/structuredData';

const ResumePage: NextPage = () => {
  return (
    <Layout pageType='resume'>
      <SEO title='이력서' description='김진수(item4)의 공개 이력서' structuredData={RESUME_PAGE} />
      <h1>이력서</h1>
      <ProfileSection />
      <SummarySection />
      <WorkExperienceSection />
      <OpensourceContributionSection />
      <NotablePointSection />
    </Layout>
  );
};
export default ResumePage;
