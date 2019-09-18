import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';

interface IndexPageProps extends PageProps {
  data: {
    site: SiteMetadataWrapper;
  };
}

const PageList = styled.ul`
  margin-left: 2.5rem;
`;
const PageLink = styled(Link)`
  font-family: 'SAO UI', 'Nanum Barun Gothic', sans-serif;
  font-size: 1.3rem;
`;

const IndexPage: React.FC<IndexPageProps> = ({
  location,
  data: {
    site: { siteMetadata: metadata },
  },
}) => {
  return (
    <Layout location={location} metadata={metadata}>
      <h1>Index</h1>
      <PageList>
        <li><PageLink to='/resume/'>Résumé</PageLink></li>
        <li><PageLink to='/faq/'>FAQ</PageLink></li>
      </PageList>
    </Layout>
  );
};
export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        description
        tags
        socials {
          twitter
        }
      }
    }
  }
`;
