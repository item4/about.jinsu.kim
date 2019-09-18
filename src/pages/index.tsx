import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';

interface IndexPageProps extends PageProps {
  data: {
    site: SiteMetadataWrapper;
  };
}

const IndexPage: React.FC<IndexPageProps> = ({
  location,
  data: {
    site: { siteMetadata: metadata },
  },
}) => {
  return (
    <Layout location={location} metadata={metadata}>
      <h1>Index</h1>
      <p>공사중</p>
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
