import { useRouter } from 'next/router';
import { useEffect } from 'react';

type gtagParams = Record<string, string | number | boolean> & {
  send_to?: string;
  page_path?: never;
  page_location?: never;
  page_title?: never;
};
type gtagFunctionJs = (method: 'js', value: Date) => void;
type gtagFunctionConfig = (
  method: 'config',
  measurement_id: string,
  config: gtagParams & { send_page_view?: boolean },
) => void;
type gtagFunctionExtra = (method: 'event', category: string, params?: gtagParams) => void;
type gtagFunction = gtagFunctionJs & gtagFunctionConfig & gtagFunctionExtra;
declare global {
  interface Window {
    gtag: gtagFunction;
    dataLayer: unknown[];
  }
}

export const useGoogleAnalyticsPageView = (measurement_id: string) => {
  const router = useRouter();
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
    window.gtag('js', new Date());
    window.gtag('config', measurement_id, {
      send_page_view: false,
    });
    if (router.isReady) {
      window.gtag('event', 'page_view');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const page_view = () => window.gtag('event', 'page_view');
    router.events.on('routeChangeComplete', page_view);
    return () => {
      router.events.off('routeChangeComplete', page_view);
    };
  }, [router.events]);
};
