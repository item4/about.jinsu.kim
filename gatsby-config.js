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
    ],
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-M4NT06GWMW'],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
  ],
};
