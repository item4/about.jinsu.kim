'use client';

import type { FC } from 'react';

import { Fragment, useState } from 'react';

import data from '@/data/projects.json' assert { type: 'json' };

type Data = typeof data;
type ProjectName = keyof Data['projects'];

const ProjectSection: FC = () => {
  const [focusedProject, setFocusedProject] = useState<ProjectName | null>(null); // [1
  const activatedKeywords = (focusedProject && data.projects[focusedProject].keywords) || [];
  const handleFocus = (project: string) => () => {
    setFocusedProject(project);
  };
  return (
    <section>
      <h2>오픈소스 프로젝트</h2>
      <p>개인적으로 개발하고 있는 오픈소스 프로젝트 목록입니다.</p>
      <p className='pc-only'>
        좌측의 프로젝트명을 클릭하시면 저장소로 이동하고, 마우스를 올리시면 우측 패널에 사용된 기술이 강조됩니다.
      </p>
      <div className='project'>
        <ul>
          {Object.entries(data.projects).map(([name, project]) => {
            return (
              <li key={name}>
                <a
                  href={project.repo_url}
                  rel='external'
                  onFocus={handleFocus(name)}
                  onMouseEnter={handleFocus(name)}
                  onMouseLeave={() => setFocusedProject(null)}
                  onBlur={() => setFocusedProject(null)}
                  className={focusedProject === name ? 'active' : undefined}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <dl className={focusedProject ? 'highlight' : undefined}>
          {Object.entries(data.keywords).map(([category, keywords]) => {
            return (
              <Fragment key={category}>
                <dt
                  className={
                    focusedProject && activatedKeywords.some((k) => keywords.includes(k)) ? 'active' : undefined
                  }
                >
                  {category}
                </dt>
                <dd>
                  <ul className='inline'>
                    {keywords.map((keyword) => {
                      return (
                        <li key={keyword} className={activatedKeywords.includes(keyword) ? 'active' : undefined}>
                          {keyword}
                        </li>
                      );
                    })}
                  </ul>
                </dd>
              </Fragment>
            );
          })}
        </dl>
      </div>
    </section>
  );
};
export default ProjectSection;
