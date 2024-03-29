import Head from 'next/head';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import type { ProfilePage } from 'schema-dts';

import { site } from '@/core/constants';

interface SEOProps {
  title?: string;
  description: string;
  noindex?: boolean;
  structuredData?: ProfilePage;
}

const SEO: FC<SEOProps> = ({ title, description, noindex = false, structuredData }) => {
  const router = useRouter();
  const url = `${site.url}${router.pathname}`;
  const titleText = title ? `${title} - ${site.title}` : site.title;
  const JSONLD = {
    '@context': 'https://schema.org',
    ...structuredData,
  };

  return (
    <Head>
      <link rel='canonical' href={url} />
      <title>{titleText}</title>

      <meta property='og:title' content={titleText} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:description' content={description} />
      <meta property='og:locale' content='ko' />
      <meta property='og:site_name' content={site.title} />
      <meta property='og:image' content={`${site.url}/item4.png`} />
      <meta property='og:image:width' content='1000' />
      <meta property='og:image:height' content='1000' />

      <meta name='twitter:title' content={titleText} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content={site.socials.twitter} />
      <meta name='twitter:image' content={`${site.url}/item4.png`} />

      <meta name='author' content={site.owner} />
      <meta name='description' content={description} />
      <meta name='keywords' content={site.tags.join(',')} />
      {noindex ? (
        <meta name='robots' content='noindex' />
      ) : (
        structuredData && (
          <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
        )
      )}
    </Head>
  );
};
export default SEO;
