const path = require('path');

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://about.jinsu.kim',
  outDir: path.join(process.cwd(), 'out'),
  autoLastmod: false,
  generateRobotsTxt: true,
};

module.exports = config;
