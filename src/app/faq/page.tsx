import type { Metadata } from 'next';

import Layout from '@/components/Layout.tsx';
import { site } from '@/core/constants.ts';

const title = `FAQ - ${site.title}`;
const description = '자주 묻는 질문들을 정리해두었습니다';

export const metadata: Metadata = {
  alternates: {
    canonical: '/faq/',
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

export default function FAQPage() {
  return (
    <Layout pageType='faq'>
      <h1>FAQ</h1>
      <section>
        <h2>구직중이신가요?</h2>
        <p>현재 구직중이 아닙니다.</p>
      </section>
      <section>
        <h2>외주를 받으시나요?</h2>
        <p>현재 건강이 좋지 않아 받지 않습니다.</p>
      </section>
      <section>
        <h2>병역(군대) 문제는 어떻게 되어 있나요?</h2>
        <p>해결된 상태입니다. 민방위 훈련만 참가하면 됩니다.</p>
      </section>
      <section>
        <h2>연락처를 알려주세요</h2>
        <p>
          이력서 본문에 있는 메일 주소, 트위터, 혹은 마스토돈을 통해 연락주시면 됩니다. 다른 연락처는 스팸 방지를 위해
          공개하지 않습니다.
        </p>
      </section>
      <section>
        <h2>최종 학력이 어떻게 되나요?</h2>
        <p>
          고등학교 졸업 후 4년제 대학에 입학했으나 형편상 자퇴 하였습니다. 학력을 이력서에 명시하지 않은 이유는 다음과
          같습니다.
        </p>
        <ol>
          <li>학벌 위주의 인사평가를 받고 싶지 않음</li>
          <li>형편상 졸업이 곤란하여 자퇴하였음</li>
        </ol>
      </section>
      <section>
        <h2>소지중인 자격증은 있나요?</h2>
        <p>
          초등학생 때 취득한 워드프로세서 외엔 없습니다. 추후 자격증을 취득하더라도 이력서엔 명시하지 않을 계획입니다.
        </p>
      </section>
      <section>
        <h2>말은 영영 할 수 없는건가요?</h2>
        <p>
          치료 경과에 따라 다르겠지만 치료에 난항을 겪고 있는 것은 사실입니다. 다만, 좋아진다는 보장이 없으므로
          &ldquo;언젠가는 말을 할 수 있을 것&rdquo;이라는 전제를 깔고 저를 대하시면 제가 심적으로 부담이 가기에
          곤란합니다.
        </p>
      </section>
      <section>
        <h2>장애등급이 어떻게 되시나요?</h2>
        <p>제가 앓는 질환은 장애등급이 나오지 않습니다.</p>
      </section>
    </Layout>
  );
}
