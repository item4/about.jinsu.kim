import type { NextPage } from 'next';

import styled from '@emotion/styled';
import Link from 'next/link';

import Layout from '@/components/Layout';

const PageList = styled.ul`
  margin-left: 2.5rem;
`;
const PageLink = styled.a`
  font-family: 'Merriweather Sans', serif;
  font-size: 1.3rem;
`;

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <h1>Index</h1>
      <PageList>
        <li>
          <Link href='/resume/'>
            <PageLink>Résumé</PageLink>
          </Link>
        </li>
        <li>
          <Link href='/parttime/'>
            <PageLink>Part-time Job</PageLink>
          </Link>
        </li>
        <li>
          <Link href='/faq/'>
            <PageLink>FAQ</PageLink>
          </Link>
        </li>
      </PageList>
    </Layout>
  );
};
export default IndexPage;
