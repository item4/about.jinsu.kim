import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import { Section, SectionTitle } from '../components/Section';
import SEO from '../components/SEO';

interface FAQPageProps extends PageProps {
  data: {
    site: SiteMetadataWrapper;
  };
}

const FAQSection = styled(Section)`
  p {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  ol {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`;

const FAQPage: React.FC<FAQPageProps> = ({
  location,
  data: {
    site: { siteMetadata: metadata },
  },
}) => {
  return (
    <Layout location={location} metadata={metadata}>
      <SEO page_name='FAQ' location={location} />
      <h1>FAQ</h1>
      <FAQSection>
        <SectionTitle>
          구직중이신가요? 구직중이라면 어떤 회사를 찾으시나요?
        </SectionTitle>
        <p>
          제 건강상태를 배려해주실 수 있는 회사를 찾고 있습니다. 풀리모트가
          가능해야하며, 자율근무제 회사를 원합니다.
        </p>
      </FAQSection>
      <FAQSection>
        <SectionTitle>외주를 받으시나요?</SectionTitle>
        <p>건강상태에 무리를 주지 않는 가벼운 업무는 취급합니다.</p>
      </FAQSection>
      <FAQSection>
        <SectionTitle>병역(군대) 문제는 어떻게 되어 있나요?</SectionTitle>
        <p>해결된 상태입니다. 민방위 훈련만 참가하면 됩니다.</p>
      </FAQSection>
      <FAQSection>
        <SectionTitle>연락처를 알려주세요</SectionTitle>
        <p>
          이력서 본문에 있는 메일 주소, 트위터, 혹은 Keybase.io를 통해
          연락주시면 됩니다. 다른 연락처는 스팸 방지를 위해 공개하지 않습니다.
        </p>
      </FAQSection>
      <FAQSection>
        <SectionTitle>최종 학력이 어떻게 되나요?</SectionTitle>
        <p>
          고등학교 졸업 후 4년제 대학에 입학했으나 형편상 휴학중입니다. 학력을
          이력서에 명시하지 않은 이유는 다음과 같습니다.
        </p>
        <ol>
          <li>학벌 위주의 인사평가를 받고 싶지 않음</li>
          <li>형편상 졸업이 확실치 못함</li>
        </ol>
      </FAQSection>
      <FAQSection>
        <SectionTitle>소지중인 자격증은 있나요?</SectionTitle>
        <p>
          초등학생 때 취득한 워드프로세서 외엔 없습니다. 추후 자격증을
          취득하더라도 이력서엔 명시하지 않을 계획입니다.
        </p>
      </FAQSection>
      <FAQSection>
        <SectionTitle>말은 영영 할 수 없는건가요?</SectionTitle>
        <p>
          치료 경과에 따라 다르겠지만 치료에 난항을 겪고 있는 것은 사실입니다.
          다만, 좋아진다는 보장이 없으므로 "언젠가는 말을 할 수 있을 것"이라는
          전제를 깔고 저를 대하시면 제가 심적으로 부담이 가기에 곤란합니다.
        </p>
      </FAQSection>
      <FAQSection>
        <SectionTitle>장애등급이 어떻게 되시나요?</SectionTitle>
        <p>제가 앓는 질환은 장애등급이 나오지 않습니다.</p>
      </FAQSection>
      <FAQSection>
        <SectionTitle>만나서 이야기를 하려면 어떻게 해야할까요?</SectionTitle>
        <p>
          만날 수 있는지 여부는 그날그날 제 상태에 따라 다릅니다. 저는 말을 할
          수 없는 관계로 필담 혹은 노트북을 이용한 대화가 가능한 환경이 조성되어
          있어야합니다.
        </p>
      </FAQSection>
    </Layout>
  );
};
export default FAQPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        description
        tags
        socials {
          twitter
        }
      }
    }
  }
`;
