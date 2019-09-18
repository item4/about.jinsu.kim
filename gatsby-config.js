module.exports = {
  siteMetadata: {
    title: 'About Jinsu Kim',
    author: 'Kim Jin Su aka item4',
    description:
      'item4라는 닉네임을 사용하는 한국인 개발자 김진수의 자기소개 웹사이트입니다.',
    siteUrl: 'https://about.jinsu.kim',
    socials: {
      twitter: `item4`,
    },
    tags: [
      '김진수',
      'item4',
      '개발자',
      '웹 개발자',
      '프로그래머',
      '웹 프로그래머',
      'Python',
      '파이썬',
      'Django',
      'Flask',
    ],
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `item4 dev story`,
        short_name: `item4 blog`,
        start_url: `/`,
        lang: `ko`,
        background_color: `#ffffff`,
        theme_color: `#2a7ae2`,
        display: `standalone`,
        icon: `static/item4.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-55942858-2',
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-emotion`,
  ],
};
