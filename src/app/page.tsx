import Link from 'next/link';

import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout pageType='index'>
      <ul className='index'>
        <li>
          <Link href='/resume'>
            <span>이력서</span>
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
}
