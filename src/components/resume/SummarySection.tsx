import Link from 'next/link';
import type { FC } from 'react';

const SummarySection: FC = () => {
  return (
    <section>
      <h2>개요</h2>
      <ul>
        <li>
          Python의 Django 기반의 백엔드 개발이 특기지만 React 등을 활용한 프론트까지 개발이 가능한 풀스택 지향 개발자.
        </li>
        <li>
          전통적인 서버, 범용 클라우드, Docker를 이용하여 테스트, CI, 배포, 모니터링등 전반적인 서비스 영역을 경험.
        </li>
        <li>
          풀 리모트 근무만 가능함. 의사 소통시 전달 수단은 텍스트 채팅만 가능. (상세는 하단{' '}
          <Link href='#notable-points'>참고사항</Link> 참조)
        </li>
      </ul>
    </section>
  );
};
export default SummarySection;
