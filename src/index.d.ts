interface PageProps {
  location: {
    pathname: string;
  };
}
interface SiteMetadata {
  siteUrl: string;
  title: string;
  author: string;
  description: string;
  socials: {
    twitter: string;
  };
  tags: string[];
}
interface SiteMetadataWrapper {
  siteMetadata: SiteMetadata;
}
