import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

import styles from '../utils/styles';

interface LayoutProps extends PageProps {
  metadata: SiteMetadata;
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
  margin: 0;
  line-height: 2rem;
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
          justify-content: space-between;
          height: 3rem;
          margin-bottom: 2rem;
          width: 100vw;

          @media (max-width: 575.98px) {
            display: none;
          }
          ${styles.mediaPrint} {
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
            `}
          >
            <li>
              <NavLink to='/resume/'>Résumé</NavLink>
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

          ${styles.mediaPrint} {
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
