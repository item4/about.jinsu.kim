import type { NextPage } from 'next';

import styled from '@emotion/styled';
import clearFix from 'polished/lib/mixins/clearFix';

import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import {
  PageBreak,
  Section,
  SectionTitle,
  SubSection,
  SubSectionTitle,
} from '@/components/Section';
import styles from '@/core/styles';

const InlineList = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    margin-right: 3px;

    &::after {
      content: ',';
    }

    &:last-child::after {
      content: '';
    }
  }
`;
const ContributionList = styled(InlineList)({
  li: {
    marginRight: '0.25rem',
  },
  'li::after': {
    content: '',
  },
  [`${styles.media_print}`]: {
    'li::after': {
      content: ',',
    },
    'li:last-child::after': {
      content: '',
    },
  },
});

const DefineList = styled.dl({
  ...clearFix(),
  '> dt': {
    float: 'left',
    fontWeight: 'bold',
    marginRight: '5px',
    textAlign: 'right',
    width: '120px',
    '&::after': {
      content: ':',
    },
  },
  '> dd': {
    float: 'left',
    width: 'calc(100% - 120px - 5px)',
  },
});
const UnorderedList = styled.ul`
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`;
const WorkList = styled.ul`
  margin-top: 1.5rem;
`;
const OpenSourceContributionList = styled.ul`
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`;
const OpenSourceNameLink = styled.a`
  margin-right: 1rem;
`;
const ContributionLink = styled.a({
  borderRadius: '0.2rem',
  color: 'white',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  padding: '0.15rem 0.25rem',
  textDecoration: 'none',
  '&:hover': {
    color: 'white',
  },
  [`${styles.media_print}`]: {
    padding: 0,
  },
});
const IssueLink = styled(ContributionLink)({
  backgroundColor: '#5bc0de',
  [`${styles.media_print}`]: {
    backgroundColor: 'none',
    color: '#5bc0de',
  },
  '&::before': {
    content: 'ISSUE ',
  },
});
const PullRequestLink = styled(ContributionLink)({
  backgroundColor: '#5cb85c',
  [`${styles.media_print}`]: {
    backgroundColor: 'none',
    color: '#5cb85c',
  },
  '&::before': {
    content: 'PR ',
  },
});
const SectionParagraph = styled.p`
  margin-left: 1.5rem;
`;

interface RelatedLink {
  name: string;
  url: string;
}

interface WorkExperience {
  name: string;
  url?: string;
  position: string;
  started_at: string;
  ended_at: string;
  descriptions: string[];
  skills: string[];
}

interface Organization {
  name: string;
  url: string;
  started_at: string;
  ended_at: string;
  descriptions: string[];
  skills: string[];
}

interface Project {
  name: string;
  url?: string;
  repo_url?: string;
  started_at: string;
  ended_at: string;
  descriptions: string[];
  skills: string[];
}

interface Contribution {
  type: 'issue' | 'pr';
  url: string;
  number: string;
}

interface OpenSource {
  name: string;
  url: string;
  items: Contribution[];
}

interface Activity {
  name: string;
  url?: string;
  date: string;
  description: string;
}

interface Disability {
  name: string;
  url: string;
  descriptions: string[];
}

const activities: Activity[] = require('@/data/activities.json');
const opensource_contributions: OpenSource[] = require('@/data/contributions.json');
const disabilities: Disability[] = require('@/data/disabilities.json');
const organizations: Organization[] = require('@/data/organizations.json');
const projects: Project[] = require('@/data/projects.json');
const related_links: RelatedLink[] = require('@/data/related_links.json');
const work_experiences: WorkExperience[] = require('@/data/work_experiences.json');

const ResumePage: NextPage = () => {
  let lineCount = 14; // before works
  return (
    <Layout>
      <SEO title='Résumé' description='김진수(item4)의 공개 이력서' />
      <section property='mainEntity' typeof='ProfilePage'>
        <h1 property='mainContentOfPage'>Résumé</h1>
        <meta property='inLanguage' content='ko-KR' />
        <div property='about author mainEntity' typeof='Person'>
          <Section>
            <SectionTitle>Jinsu Kim</SectionTitle>
            <DefineList>
              <dt>Name</dt>
              <dd property='name'>김진수</dd>
              <dt>ID/Nickname</dt>
              <dd>item4</dd>
              <dt>Addr</dt>
              <dd property='address' typeof='PostalAddress'>
                <meta property='addressCountry' content='KR' />
                <span property='addressLocality'>경기도 부천시</span>
              </dd>
              <dt>Email</dt>
              <dd>
                <a href='mailto:resume@jinsu.kim' property='email'>
                  resume@jinsu.kim
                </a>
              </dd>
              <dt>Objective</dt>
              <dd property='jobTitle'>웹 백엔드 개발자</dd>
              <dt>Links</dt>
              <dd>
                <InlineList>
                  {related_links.map(link => (
                    <li key={link.name}>
                      <a href={link.url} property='url'>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </InlineList>
              </dd>
            </DefineList>
          </Section>
          <Section>
            <SectionTitle>Summary</SectionTitle>
            <UnorderedList>
              <li>
                Python의 Django 기반의 백엔드 개발이 특기지만 React 등을 활용한
                프론트까지 개발이 가능한 풀스택 지향 개발자.
              </li>
              <li>
                전통적인 서버, 범용 클라우드, Docker를 이용하여 테스트, CI,
                배포, 모니터링등 전반적인 서비스 영역을 경험.
              </li>
              <li>
                풀 리모트 근무만 가능함. 의사 소통시 전달 수단은 텍스트 채팅만
                가능. (상세는 하단 <a href='#NotablePoints'>Notable Points</a>{' '}
                참조)
              </li>
            </UnorderedList>
          </Section>
          <Section>
            <SectionTitle>Work Experiences</SectionTitle>
            {work_experiences.map(work => {
              const name = work.url ? (
                <a
                  property='url'
                  href={work.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  <span property='name'>{work.name}</span>
                </a>
              ) : (
                <span property='name'>{work.name}</span>
              );
              lineCount +=
                4 +
                work.descriptions
                  .map(desc => (desc.length / 40) | 0)
                  .reduce((p, c) => p + c, 0);
              let breaking = false;
              if (lineCount >= 18) {
                breaking = true;
                lineCount = 0;
              }
              return (
                <>
                  <SubSection
                    property='worksFor'
                    typeof='Organization'
                    key={work.name}
                  >
                    <SubSectionTitle>{name}</SubSectionTitle>
                    <DefineList>
                      <dt>포지션</dt>
                      <dd>{work.position}</dd>
                      <dt>근무기간</dt>
                      <dd>
                        <time property='startDate'>{work.started_at}</time>
                        부터 <time>{work.ended_at}</time>
                        까지
                      </dd>
                      <dt>업무내용</dt>
                      <dd>
                        <WorkList>
                          {work.descriptions.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                        </WorkList>
                      </dd>
                      <dt>사용된 기술</dt>
                      <dd>
                        <InlineList>
                          {work.skills.map(skill => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </InlineList>
                      </dd>
                    </DefineList>
                  </SubSection>
                  {breaking ? <PageBreak /> : null}
                </>
              );
            })}
          </Section>
          <Section>
            <SectionTitle>Organizations</SectionTitle>
            {organizations.map(org => {
              const name = org.url ? (
                <a
                  property='url'
                  href={org.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  <span property='name'>{org.name}</span>
                </a>
              ) : (
                <span property='name'>{org.name}</span>
              );
              lineCount +=
                4 +
                org.descriptions
                  .map(desc => (desc.length / 40) | 0)
                  .reduce((p, c) => p + c, 0);
              let breaking = false;
              if (lineCount >= 18) {
                breaking = true;
                lineCount = 0;
              }
              return (
                <>
                  <SubSection
                    key={org.name}
                    property='affiliation'
                    typeof='Organization'
                  >
                    <SubSectionTitle>{name}</SubSectionTitle>
                    <DefineList>
                      <dt>소속기간</dt>
                      <dd>
                        <time property='startDate'>{org.started_at}</time>
                        부터 <time>{org.ended_at}</time>
                        까지
                      </dd>
                      <dt>활동내용</dt>
                      <dd>
                        <WorkList>
                          {org.descriptions.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                        </WorkList>
                      </dd>
                      <dt>사용된 기술</dt>
                      <dd>
                        <InlineList>
                          {org.skills.map(skill => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </InlineList>
                      </dd>
                    </DefineList>
                  </SubSection>
                  {breaking ? <PageBreak /> : null}
                </>
              );
            })}
          </Section>
          <Section>
            <SectionTitle>Participated Projects</SectionTitle>
            {projects.map(project => {
              const name = project.url ? (
                <a
                  property='url'
                  href={project.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  <span property='name'>{project.name}</span>
                </a>
              ) : (
                <span property='name'>{project.name}</span>
              );
              lineCount +=
                4 +
                project.descriptions
                  .map(desc => (desc.length / 40) | 0)
                  .reduce((p, c) => p + c, 0);
              let breaking = false;
              if (lineCount >= 20) {
                breaking = true;
                lineCount = 0;
              }
              return (
                <>
                  <SubSection key={project.name}>
                    <SubSectionTitle>{name}</SubSectionTitle>
                    <DefineList>
                      {project.repo_url ? (
                        <>
                          <dt>저장소</dt>
                          <dd>
                            <a
                              href={project.repo_url}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {project.repo_url}
                            </a>
                          </dd>
                        </>
                      ) : null}
                      <dt>참여기간</dt>
                      <dd>
                        <time property='startDate'>{project.started_at}</time>
                        부터 <time>{project.ended_at}</time>까지
                      </dd>
                      <dt>프로젝트 소개</dt>
                      <dd>
                        <WorkList>
                          {project.descriptions.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                        </WorkList>
                      </dd>
                      <dt>사용된 기술</dt>
                      <dd>
                        <InlineList>
                          {project.skills.map(skill => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </InlineList>
                      </dd>
                    </DefineList>
                  </SubSection>
                  {breaking ? <PageBreak /> : null}
                </>
              );
            })}
          </Section>
          <Section>
            <SectionTitle>Open-Source Contributions</SectionTitle>
            <OpenSourceContributionList>
              {opensource_contributions.map((contrib, index) => {
                return (
                  <li key={index}>
                    <OpenSourceNameLink href={contrib.url} target='_blank'>
                      {contrib.name}
                    </OpenSourceNameLink>
                    <ContributionList>
                      {contrib.items.map(item => {
                        const Cls =
                          item.type === 'pr' ? PullRequestLink : IssueLink;
                        return (
                          <li key={item.number}>
                            <Cls href={item.url}>{item.number}</Cls>
                          </li>
                        );
                      })}
                    </ContributionList>
                  </li>
                );
              })}
            </OpenSourceContributionList>
          </Section>
          <PageBreak />
          <Section>
            <SectionTitle>Activities</SectionTitle>
            {activities.map((activity, index) => {
              const name = activity.url ? (
                <a href={activity.url} target='_blank' rel='noreferrer'>
                  {activity.name}
                </a>
              ) : (
                activity.name
              );
              return (
                <SubSection key={index}>
                  <SubSectionTitle>{name}</SubSectionTitle>
                  <p>
                    <time>({activity.date})</time>
                    {activity.description}
                  </p>
                </SubSection>
              );
            })}
          </Section>
          <Section>
            <a id='NotablePoints' />
            <SectionTitle>Notable Points</SectionTitle>
            <SectionParagraph>
              저는 다음과 같은 문제들로 정기적으로 병원 진료를 받고 있습니다.
            </SectionParagraph>
            {disabilities.map((disability, index) => {
              const title = disability.url ? (
                <a href={disability.url} target='_blank' rel='noreferrer'>
                  {disability.name}
                </a>
              ) : (
                disability.name
              );
              return (
                <SubSection key={index}>
                  <SubSectionTitle>{title}</SubSectionTitle>
                  <UnorderedList>
                    {disability.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </UnorderedList>
                </SubSection>
              );
            })}
          </Section>
        </div>
      </section>
    </Layout>
  );
};
export default ResumePage;
