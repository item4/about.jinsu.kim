import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { FC } from 'react';

import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import 'the-new-css-reset/css/reset.css';

import { GoogleAnalyticsScript } from '@/components/GoogleAnalyticsScript';
import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from '@/core/constants';
import { useGoogleAnalyticsPageView } from '@/hooks/useGoogleAnalyticsPageView';

import '@/core/index.css';

const Site: FC<AppProps> = ({ Component, pageProps }) => {
  useGoogleAnalyticsPageView(GOOGLE_ANALYTICS_MEASUREMENT_ID);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width' />
      </Head>
      <GoogleAnalyticsScript measurement_id={GOOGLE_ANALYTICS_MEASUREMENT_ID} />
      <Component {...pageProps} />
    </>
  );
};

export default Site;
