import gaFactory from './ga';

gaFactory();

if (window.gaKey) {
  window.ga('create', window.gaKey, 'auto');
  window.ga('require', 'autotrack');
  window.ga('send', 'pageview');
}
