import type { AppProps } from 'next/app';

import { Global } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'typeface-merriweather';
import 'typeface-merriweather-sans';
import '@kfonts/nanum-barun-gothic-otf';

import { GoogleAnalyticsScript } from '@/components/GoogleAnalyticsScript';
import { google_analytics_measurement_id } from '@/core/constants';
import { globalStyles } from '@/core/styles';
import { useGoogleAnalyticsPageView } from '@/hooks/useGoogleAnalyticsPageView';

config.autoAddCss = false;

const Site = ({ Component, pageProps }: AppProps) => {
  useGoogleAnalyticsPageView(google_analytics_measurement_id);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width' />
      </Head>
      <GoogleAnalyticsScript measurement_id={google_analytics_measurement_id} />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
};

export default Site;
