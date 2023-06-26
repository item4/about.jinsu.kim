import type { FC } from 'react';

import data from '@/data/related-links.json' assert { type: 'json' };

const ProfileSection: FC = () => {
  return (
    <section className='profile'>
      <h2>기본 정보</h2>
      <dl>
        <dt>이름</dt>
        <dd>김진수</dd>
        <dt>별명(닉네임)</dt>
        <dd>item4</dd>
        <dt>거주지</dt>
        <dd>경기도 부천시</dd>
        <dt>E-mail</dt>
        <dd>
          <a href='mailto:resume@jinsu.kim' rel='me'>
            resume@jinsu.kim
          </a>
        </dd>
        <dt>포지션</dt>
        <dd>웹 백엔드 개발자</dd>
        <dt>Links</dt>
        <dd>
          <ul className='inline'>
            <li className='print-only'>
              <a href='https://about.jinsu.kim/resume/' rel='me'>
                공개 이력서 (웹 버전)
              </a>
            </li>
            {data.map((link) => (
              <li key={link.name}>
                <a href={link.url} rel='me'>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </dd>
      </dl>
    </section>
  );
};
export default ProfileSection;
