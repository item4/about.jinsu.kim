import { Link, graphql } from 'gatsby';
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
      <ul>
        <li><Link to='/resume/'>이력서</Link></li>
        <li><Link to='/faq/'>자주 묻는 질문</Link></li>
      </ul>
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
