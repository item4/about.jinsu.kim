import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface NotFoundPageProps extends PageProps {
  data: {
    site: SiteMetadataWrapper;
  };
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  location,
  data: {
    site: { siteMetadata: metadata },
  },
}) => {
  return (
    <Layout location={location} metadata={metadata}>
      <SEO page_name='Not Found' location={location} />
      <h1>Not Found</h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
    </Layout>
  );
};
export default NotFoundPage;

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
