import gaFactory from './ga';

gaFactory();

if (window.gaKey) {
  window.ga('create', window.gaKey, 'auto');
  window.ga('require', 'cleanUrlTracker');
  window.ga('require', 'eventTracker');
  window.ga('require', 'impressionTracker');
  window.ga('require', 'mediaQueryTracker');
  window.ga('require', 'outboundFormTracker');
  window.ga('require', 'outboundLinkTracker');
  window.ga('require', 'pageVisibilityTracker');
  window.ga('send', 'pageview');
}
