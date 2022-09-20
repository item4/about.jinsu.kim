import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

import { site } from '@/core/constants';
import styles from '@/core/styles';

interface LayoutProps {
  children: React.ReactNode;
}

const HomeLink = styled.a`
  color: white;
  font-size: 1.25rem;
  line-height: 2rem;
  margin: 0;
  text-decoration: none;

  &,
  &:visited,
  &:hover {
    color: white;
  }
`;
const NavLink = styled.a`
  color: white;
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 1.25rem;
  line-height: 2rem;
  margin: 0;
  text-decoration: none;

  &:visited,
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;
const Header = styled.header({
  backgroundColor: '#39f',
  display: 'flex',
  height: '3rem',
  justifyContent: 'space-between',
  marginBottom: '2rem',
  width: '100vw',
  '@media (max-width: 575.98px)': {
    display: 'none',
  },
  [`${styles.media_print}`]: {
    display: 'none',
  },
});
const Title = styled.h1`
  display: flex;
  height: 2rem;
  margin: 0;
  padding: 0.5rem 2rem;
`;
const Nav = styled.nav`
  display: flex;
  height: 2rem;
  padding: 0.5rem 2rem;
  text-align: right;
`;
const NavList = styled.ul`
  display: inline;
  list-style-type: none;

  li {
    display: inline;
    margin: 0 5px 0 0;
  }

  li::after {
    color: #fff;
    content: '/';
    margin-left: 5px;
  }

  li:last-child::after {
    content: none;
    margin: 0;
  }
`;
const Main = styled.main({
  margin: 'auto',
  paddingBottom: '5rem',
  width: '95vw',
  wordBreak: 'break-all',
  [`${styles.media_print}`]: {
    width: '100vw',
  },
});
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div
        aria-hidden='true'
        hidden
        css={css`
          display: none;
        `}
        property='image'
        typeof='ImageObject'
      >
        <img property='url' alt='logo' src={`${site.url}/item4.png`} />
        <meta property='height' content='1000' />
        <meta property='width' content='1000' />
      </div>

      <Global styles={styles.globalStyles} />
      <Header>
        <Title>
          <Link href='/'>
            <HomeLink>About Jinsu Kim</HomeLink>
          </Link>
        </Title>
        <Nav>
          <NavList>
            <li>
              <Link href='/resume'>
                <NavLink>Résumé</NavLink>
              </Link>
            </li>
            <li>
              <Link href='/parttime'>
                <NavLink>Part-time Job</NavLink>
              </Link>
            </li>
            <li>
              <Link href='/faq'>
                <NavLink>FAQ</NavLink>
              </Link>
            </li>
          </NavList>
        </Nav>
      </Header>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
