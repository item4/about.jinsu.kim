import type { FC } from 'react';

import { Fragment } from 'react';

import data from '@/data/contributions.json' with { type: 'json' };

const OpensourceContributionSection: FC = () => {
  return (
    <section>
      <h2>오픈소스 기여</h2>
      <dl className='contribution'>
        {data.map((contrib) => {
          return (
            <Fragment key={contrib.name}>
              <dt>
                <a href={contrib.url} rel='external'>
                  {contrib.name}
                </a>
              </dt>
              <dd>
                <ul>
                  {contrib.items.map((item) => {
                    return (
                      <li key={item.number}>
                        <a href={item.url} rel='external'>
                          {item.number}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </Fragment>
          );
        })}
      </dl>
    </section>
  );
};

export default OpensourceContributionSection;
