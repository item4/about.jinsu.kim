import type { FC } from 'react';

import data from '@/data/notable-points.json' with { type: 'json' };

const NotablePointSection: FC = () => {
  return (
    <section>
      <h2 id='notable-points'>참고사항</h2>
      <p>저는 다음과 같은 문제들로 정기적으로 병원 진료를 받고 있습니다.</p>
      {data.map((topic, index) => {
        const title = topic.url ? (
          <a href={topic.url} rel='external'>
            {topic.name}
          </a>
        ) : (
          topic.name
        );
        return (
          <section key={index}>
            <h3>{title}</h3>
            <ul>
              {topic.descriptions.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </section>
        );
      })}
    </section>
  );
};

export default NotablePointSection;
