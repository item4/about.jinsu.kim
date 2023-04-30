import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';

interface LayoutProps {
  pageType?: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ pageType, children }) => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <header>
        <Link href='/' className='home' aria-current={path === '/' ? 'page' : undefined}>
          About Jinsu Kim
        </Link>
        <nav>
          <ul>
            <li>
              <Link href='/resume' aria-current={path === '/resume' ? 'page' : undefined}>
                이력서
              </Link>
            </li>
            <li>
              <Link href='/parttime' aria-current={path === '/parttime' ? 'page' : undefined}>
                파트타임
              </Link>
            </li>
            <li>
              <Link href='/faq' aria-current={path === '/faq' ? 'page' : undefined}>
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={pageType}>{children}</main>
    </>
  );
};

export default Layout;
