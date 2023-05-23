import type { FC } from 'react';

import data from '@/data/work-experiences.json' assert { type: 'json' };

const sum = (arr: number[]): number => arr.reduce((p, c) => p + c, 0);
const WorkExperienceSection: FC = () => {
  let lineCount = 14; // before works
  let needBreaking = false;
  return (
    <section>
      <h2>업무 경력</h2>
      {data.map((work) => {
        let className = undefined;
        if (needBreaking) {
          className = 'page-break';
          needBreaking = false;
        }
        const name = work.url ? (
          <a href={work.url} rel='external'>
            {work.name}
          </a>
        ) : (
          work.name
        );
        lineCount += 4 + sum(work.tasks.map(({ desc }) => sum(desc.map((text) => (text.length / 40) | 0))));
        if (lineCount >= 18) {
          needBreaking = true;
          lineCount = 0;
        }

        return (
          <section key={work.name} className={className}>
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
