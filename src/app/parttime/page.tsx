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
        <p>현재 건강이 좋지 않아 관련 활동을 중단한 상태입니다. 연락주셔도 답변을 드리기 힘든 점 양해 부탁드립니다.</p>
      </section>
      <section>
        <h2>간략 소개</h2>
        <p>일상생활과 정신건강에 무리가 되지 않는 선에서, 간단한 코딩 및 코딩 관련 업무를 대리수행해드립니다.</p>
      </section>
      <section>
        <h2>가능한 업무</h2>
        <ul>
          <li>Python 3, TypeScript등의 언어 및 웹 개발 관련 기술 사용 가능</li>
          <li>GitHub Actions, CircleCI, Travis-CI 등의 CI/CD 환경 세팅 가능</li>
          <li>웹 크롤링, 정규식 작성 등 여러가지 편의작업 가능</li>
        </ul>
        <p>기타 기술이나 구체적인 가능업무 내역은 본 사이트의 이력서를 참조해주세요.</p>
      </section>
      <section>
        <h2>받지 않는 업무</h2>
        <ul>
          <li>대리시험</li>
          <li>과제물의 결과물만 요구하는 경우 (과제물은 과외의 경우에만 같이 풀어드립니다)</li>
        </ul>
      </section>
      <section>
        <h2>가격 산정</h2>
        <p>
          기본적으로 업무 난이도에 따라 30,000 KRW에서 50,000 KRW 정도의 시급을 기반으로 예상 소요시간과 실제 소요시간을
          이용해 가격을 책정합니다. 목표 설정이 일상생활과 정신건강에 무리가 되지 않는 선에서만 하는 것인지라 너무 큰
          단위의 업무는 가급적 지양하고 있습니다. 대략적으로 한 번에 최저 10,000 KRW에서 최대 1,000,000 KRW 이내만
          가능하다고 이해해주시면 감사하겠습니다.
        </p>
      </section>
      <section>
        <h2>지불 수단</h2>
        <ul>
          <li>KRW 계좌이체 (default, recommended)</li>
          <li>KRW Google Gift Card (fallback)</li>
          <li>BTC: 35Y8fGLru7LpcR9auaD4PiNKU79keevpjd (KRW 대비 가격 20% 할증)</li>
          <li>ETH: 0xfcf871a37f396fad5b16917f081f3cb970b9020a (KRW 대비 가격 20% 할증)</li>
          <li>기타 수단: 상담 필요</li>
        </ul>
      </section>
      <section>
        <h2>정책 안내</h2>
        <ol>
          <li>
            전체금액에 대하여 최소 20% 이상의 금액을 선입금 해주셔야 합니다. 작업은 선입금 후에 진행됩니다. 50% 이상을
            선호합니다.
          </li>
          <li>별도의 계약서류가 필요할 정도의 큰 작업은 가급적 지양합니다.</li>
          <li>
            오픈소스 작업을 선호하지만 오픈소스가 아니어도 상관 없습니다. 보안 유지가 필요한 경우 미리 말씀해주세요.
          </li>
          <li>대리시험 응시 내지는 시험 도중 부정행위에 도움을 달라는 의뢰는 받지 않습니다.</li>
          <li>
            과제물을 도와드리는 것은 어디까지나 공부를 하는 분에게 도움을 드리기 위한 것이지, 학습할 의향 없이 답안만
            요구하는 경우에는 일절 도움을 드리지 않습니다.
          </li>
        </ol>
      </section>
      <section>
        <h2>연락처</h2>
        <p>
          <a href='https://open.kakao.com/o/s54NXY0b' target='_blank' rel='noopener noreferrer'>
            카카오톡 1:1 오픈채팅
          </a>
        </p>
      </section>
    </Layout>
  );
}
