interface PageProps {
  location: {
    pathname: string;
  };
}

interface SiteMetadata {
  author: string;
  description: string;
  siteUrl: string;
  tags: string[];
  title: string;
  socials: {
    twitter: string;
  };
}

interface SiteMetadataWrapper {
  siteMetadata: SiteMetadata;
}
