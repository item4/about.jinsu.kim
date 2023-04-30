import type { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

const IndexPage: NextPage = () => {
  return (
    <Layout pageType='index'>
      <SEO description='item4라는 별명을 쓰는 한국인 개발자 김진수의 자기소개 사이트' />
      <ul className='index'>
        <li>
          <Link href='/resume'>
            <span>이력서</span>
          </Link>
        </li>
        <li>
          <Link href='/parttime'>
            <span>파트타임</span>
          </Link>
        </li>
        <li>
          <Link href='/faq'>
            <span>FAQ</span>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};
export default IndexPage;
