import type { FC } from 'react';

import Script from 'next/script';

interface GoogleAnalyticsScriptProps {
  measurementId: string;
}
export const GoogleAnalyticsScript: FC<GoogleAnalyticsScriptProps> = ({ measurementId }) => {
  return (
    <>
      <Script
        id='google_analytics'
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy='afterInteractive'
        async
      />
    </>
  );
};
