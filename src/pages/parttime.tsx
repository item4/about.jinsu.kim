import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Section, SectionTitle } from '../components/Section';

interface PartTimeJobPageProps extends PageProps {
  data: {
    site: SiteMetadataWrapper;
  };
}

const PartTimeJobSection = styled(Section)`
  p {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  ol,
  ul {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`;

const PartTimeJobPage: React.FC<PartTimeJobPageProps> = ({
  location,
  data: {
    site: { siteMetadata: metadata },
  },
}) => {
  return (
    <Layout location={location} metadata={metadata}>
      <SEO page_name='Part-time Job' location={location} />
      <h1>Part-time Job</h1>
      <PartTimeJobSection>
        <SectionTitle>간략 소개</SectionTitle>
        <p>
          일상생활과 정신건강에 무리가 되지 않는 선에서, 간단한 코딩 및 코딩
          관련 업무를 대리수행해드립니다.
        </p>
      </PartTimeJobSection>
      <PartTimeJobSection>
        <SectionTitle>가능한 업무</SectionTitle>
        <ul>
          <li>Python 3, TypeScript등의 언어 및 웹 개발 관련 기술 사용 가능</li>
          <li>GitHub Actions, Travis-CI 등의 환경 세팅 가능</li>
          <li>웹 크롤링, 정규식 작성 등 여러가지 편의작업 가능</li>
        </ul>
        <p>
          기타 기술이나 구체적인 가능업무 내역은 본 사이트의 이력서를
          참조해주세요.
        </p>
      </PartTimeJobSection>
      <PartTimeJobSection>
        <SectionTitle>가격 산정</SectionTitle>
        <p>
          기본적으로 업무 난이도에 따라 30,000 KRW에서 50,000 KRW 정도의 시급을
          기반으로 예상 소요시간과 실제 소요시간을 이용해 가격을 책정합니다.
          목표 설정이 일상생활과 정신건강에 무리가 되지 않는 선에서만 하는
          것인지라 너무 큰 단위의 업무는 가급적 지양하고 있습니다. 대략적으로 한
          번에 최저 10,000 KRW에서 최대 1,000,000 KRW 이내만 가능하다고
          이해해주시면 감사하겠습니다.
        </p>
      </PartTimeJobSection>
      <PartTimeJobSection>
        <SectionTitle>지불 수단</SectionTitle>
        <ul>
          <li>KRW 계좌이체 (default, recommand)</li>
          <li>KRW Google Gift Card (fallback)</li>
          <li>
            BTC: 35Y8fGLru7LpcR9auaD4PiNKU79keevpjd (KRW 대비 가격 10% 할증)
          </li>
          <li>
            ETH: 0xfcf871a37f396fad5b16917f081f3cb970b9020a (KRW 대비 가격 10%
            할증)
          </li>
          <li>기타 수단: 상담 필요</li>
        </ul>
      </PartTimeJobSection>
      <PartTimeJobSection>
        <SectionTitle>단골 목록</SectionTitle>
        <ul>
          <li>익명(법인) - express/flutter 기반 서비스 유지보수</li>
        </ul>
      </PartTimeJobSection>
      <PartTimeJobSection>
        <SectionTitle>작업 완료 목록</SectionTitle>
        <ul>
          <li>
            50,000 KRW - disjukr님 (
            <a
              href='https://github.com/disjukr/just-news/'
              target='_blank'
              rel='noreferrer'
            >
              disjukr/just-news
            </a>
            ,{' '}
            <a href='https://github.com/disjukr/just-news/commit/63705b878c621acaa8c071deae107f611ba059c9'>
              [commit log]
            </a>
            , GitHub Actions 도입)
          </li>
          <li>
            60,000 KRW - 익명 (aiohttp를 이용한 특정 사이트의 공지사항 수집)
          </li>
          <li>15,000 KRW - 익명 (정규식을 이용한 자료정리)</li>
          <li>
            50,000 KRW - disjukr님 (
            <a
              href='https://github.com/disjukr/just-news/'
              target='_blank'
              rel='noreferrer'
            >
              disjukr/just-news
            </a>
            ,{' '}
            <a href='https://github.com/disjukr/just-news/commit/d62fb916d6fcb7a507d1adaf7e5116296bfcd9d2'>
              [commit log]
            </a>
            , GitHub Actions 개선)
          </li>
          <li>
            18,000 KRW - 익명 (docker-compose를 사용한 백엔드 서버 환경 조성)
          </li>
          <li>
            100,000 KRW - 익명 (flask-sqlalchemy를 사용한 간단한 웹사이트 개발)
          </li>
          <li>
            50,000 KRW - disjukr님 (
            <a
              href='https://github.com/disjukr/just-news/'
              target='_blank'
              rel='noreferrer'
            >
              disjukr/just-news
            </a>
            ,{' '}
            <a href='https://github.com/disjukr/just-news/commit/5e082dc64fc6899dacb831cc1d11a92d33fab3ef'>
              [commit log]
            </a>
            , GitHub Actions에서 puppeteer 사용하는 문제 개선)
          </li>
          <li>50,000 KRW - 익명 (TypeScript로 작성된 코드의 검색 기능 개선)</li>
          <li>
            50,000 KRW - hongminhee님 (
            <a
              href='https://github.com/dahlia/seonbi'
              target='_blank'
              rel='noreferrer'
            >
              dahlia/seonbi
            </a>
            ,{' '}
            <a
              href='https://github.com/dahlia/seonbi/pull/4'
              target='_blank'
              rel='noreferrer'
            >
              [PR#4]
            </a>
            , Elm으로 작성된 웹페이지 오작동 수정)
          </li>
          <li>130,000 KRW - 익명 (GatsbyJS로 정적 웹사이트 개발)</li>
          <li>100,000 KRW- 익명 (Python requests기반으로 뉴스기사 크롤링)</li>
          <li>
            200,000 KRW - 익명 (Python + Flask + uWSGI + nginx + Docker 세팅법
            안내)
          </li>
          <li>
            20,000 KRW - 익명 (웹 페이지가 브라우저간 다르게 랜더링 되는 문제
            해소)
          </li>
          <li>
            300,000 KRW - comet님 (
            <a
              href='https://github.com/microsoft/TypeScript-Website'
              target='_blank'
              rel='noreferrer'
            >
              microsoft/TypeScript-Website
            </a>
            ,{' '}
            <a
              href='https://github.com/microsoft/TypeScript-Website/pull/266'
              target='_blank'
              rel='noreferrer'
            >
              [PR#266]
            </a>
            , Gatsby용 TypeScript 플러그인 교체)
          </li>
          <li>100,000 KRW - 익명 (doc 파일을 markdown 문법으로 변환작업)</li>
          <li>
            200,000 KRW - 타로님 (Rust로 특정 API 상태에 따라 Slack에 메시지
            보내고, Slack 특정 명령어에 반응해서 API 상태 가져오는 Slack Bot
            작성)
          </li>
          <li>
            40,000 KRW - lazygyu님 (TypeScript로 근태 메시지 파싱 함수 작성)
          </li>
          <li>40,000 KRW - 익명 (Git/GitHub 기초적인 사용법 과외)</li>
          <li>60,000 KRW - 익명 (Slack API 활용한 자료 Sync)</li>
        </ul>
      </PartTimeJobSection>
      <PartTimeJobSection>
        <SectionTitle>정책 안내</SectionTitle>
        <ol>
          <li>
            전체금액에 대하여 최소 20% 이상의 금액을 선입금 해주셔야 합니다.
            작업은 선입금 후에 진행됩니다. 50% 이상을 선호합니다.
          </li>
          <li>별도의 계약서류가 필요할 정도의 큰 작업은 가급적 지양합니다.</li>
          <li>
            오픈소스 작업을 선호하지만 오픈소스가 아니어도 상관 없습니다. 보안
            유지가 필요한 경우 미리 말씀해주세요.
          </li>
        </ol>
      </PartTimeJobSection>
      <PartTimeJobSection>
        <SectionTitle>연락처</SectionTitle>
        <p>
          <a
            href='https://open.kakao.com/o/s54NXY0b'
            target='_blank'
            rel='noreferrer'
          >
            카카오톡 1:1 오픈채팅
          </a>
        </p>
      </PartTimeJobSection>
    </Layout>
  );
};
export default PartTimeJobPage;

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
