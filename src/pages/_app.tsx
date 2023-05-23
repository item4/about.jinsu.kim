import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { FC } from 'react';

import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css' assert { type: 'css' };
import 'the-new-css-reset/css/reset.css' assert { type: 'css' };

import { GoogleAnalyticsScript } from '@/components/GoogleAnalyticsScript';
import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from '@/core/constants';
import { useGoogleAnalyticsPageView } from '@/hooks/useGoogleAnalyticsPageView';

import '@/core/index.css' assert { type: 'css' };

const Site: FC<AppProps> = ({ Component, pageProps }) => {
  useGoogleAnalyticsPageView(GOOGLE_ANALYTICS_MEASUREMENT_ID);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width' />
      </Head>
      <GoogleAnalyticsScript measurementId={GOOGLE_ANALYTICS_MEASUREMENT_ID} />
      {/*@ts-ignore*/}
      <Component {...pageProps} />
    </>
  );
};

export default Site;
