import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps extends PageProps {
  page_name: string;
}

const SEO: React.FC<SEOProps> = props => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          author
          title
          description
          socials {
            twitter
          }
          tags
        }
      }
    }
  `);
  const {
    siteUrl,
    title,
    author,
    description,
    socials: { twitter },
    tags,
  } = siteMetadata as SiteMetadata;
  const {
    location: { pathname },
    page_name,
  } = props;
  const url = `${siteUrl}${pathname}`;
  const titleText = page_name ? `${page_name} - ${title}` : title;

  return (
    <>
      <Helmet defer={false}>
        <html lang='ko' prefix='og: http://ogp.me/ns#' />
        <meta charSet='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <link rel='canonical' href={url} />
        <meta
          name='viewport'
          content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width'
        />
        <title>{titleText}</title>

        <meta property='og:title' content={titleText} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={siteUrl} />
        <meta property='og:description' content={description} />
        <meta property='og:locale' content='ko' />
        <meta property='og:site_name' content={title} />
        <meta property='og:image' content={`${siteUrl}/item4.png`} />
        <meta property='og:image:width' content='1000' />
        <meta property='og:image:height' content='1000' />
        {tags.map(tag => (
          <meta property='article:tag' content={tag} key={tag} />
        ))}

        <meta name='twitter:title' content={titleText} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content={twitter} />
        <meta name='twitter:image' content={`${siteUrl}/item4.png`} />

        <meta name='author' content={author} />
        <meta name='description' content={description} />
        <meta name='keywords' content={tags.join(',')} />
        <link
          rel='icon'
          type='image/x-icon'
          href={`${siteUrl}/favicon.ico`}
        />

        <meta name='referrer' content='always' />
        <meta
          name='google-site-verification'
          content='ugqR2ABFvbdKXqPaS7hh5-0b4kSbF8jf2OWBkooJ-O0'
        />
      </Helmet>
    </>
  );
};
export default SEO;
