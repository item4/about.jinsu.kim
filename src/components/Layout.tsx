import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

import styles from '../utils/styles';

interface LayoutProps extends PageProps {
  metadata: SiteMetadata;
  children: React.ReactNode;
}

const HomeLink = styled(Link)`
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
const NavLink = styled(Link)`
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

const Layout: React.FC<LayoutProps> = ({ children, metadata: { siteUrl } }) => {
  return (
    <>
      <div
        aria-hidden='true'
        hidden
        css={css`
          display: none;
        `}
        property='image'
        typeof='http://schema.org/ImageObject'
      >
        <img property='url' src={`${siteUrl}/item4.png`} />
        <meta property='height' content='1000' />
        <meta property='width' content='1000' />
      </div>

      <Global styles={styles.globalStyles} />
      <header
        css={css`
          background: #39f;
          display: flex;
          height: 3rem;
          justify-content: space-between;
          margin-bottom: 2rem;
          width: 100vw;

          @media (max-width: 575.98px) {
            display: none;
          }
          ${styles.media_print} {
            display: none;
          }
        `}
      >
        <h1
          css={css`
            display: flex;
            height: 2rem;
            margin: 0;
            padding: 0.5rem 2rem;
          `}
        >
          <HomeLink to='/'>About Jinsu Kim</HomeLink>
        </h1>
        <nav
          css={css`
            display: flex;
            height: 2rem;
            padding: 0.5rem 2rem;
            text-align: right;
          `}
        >
          <ul
            css={css`
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
            `}
          >
            <li>
              <NavLink to='/resume/'>Résumé</NavLink>
            </li>
            <li>
              <NavLink to='/parttime/'>Part-time Job</NavLink>
            </li>
            <li>
              <NavLink to='/faq/'>FAQ</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main
        css={css`
          margin: auto;
          padding-bottom: 5rem;
          width: 95vw;
          word-break: break-all;

          ${styles.media_print} {
            width: 100vw;
          }
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
