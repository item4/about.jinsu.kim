import type { FC } from 'react';

import data from '@/data/work-experiences.json' with { type: 'json' };

const WorkExperienceSection: FC = () => {
  return (
    <section>
      <h2>업무 경력</h2>
      {data.map((work) => {
        const name = work.url ? (
          <a href={work.url} rel='external'>
            {work.name}
          </a>
        ) : (
          work.name
        );
        return (
          <section key={work.name} className={work.break_before ? 'page-break' : undefined}>
            <h3>{name}</h3>
            <dl>
              <dt>포지션</dt>
              <dd>{work.position}</dd>
              <dt>근무기간</dt>
              <dd>
                <time>{work.started_at}</time>
                부터 <time>{work.ended_at}</time>
                까지
              </dd>
              <dt>업무 개요</dt>
              <dd>{work.total_summary}</dd>
              <dt>업무 내용</dt>
              <dd>
                {work.tasks.map(({ summary, desc, keywords }) => {
                  return (
                    <section key={summary}>
                      <h4>{summary}</h4>
                      <dl>
                        <dt>주요 업무</dt>
                        <dd>
                          <ul>
                            {desc.map((desc) => (
                              <li key={desc}>{desc}</li>
                            ))}
                          </ul>
                        </dd>
                        <dt>관련 키워드</dt>
                        <dd>
                          <ul className='inline'>
                            {keywords.map((keyword) => (
                              <li key={keyword}>{keyword}</li>
                            ))}
                          </ul>
                        </dd>
                      </dl>
                    </section>
                  );
                })}
              </dd>
            </dl>
          </section>
        );
      })}
    </section>
  );
};
export default WorkExperienceSection;
