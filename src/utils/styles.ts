import { css } from '@emotion/core';
import darken from 'polished/lib/color/darken';

export const brandColor = '#39f';
export const backgroudColor = '#fff';
export const textColor = '#000';
export const grayColor = '#626262';
export const screenSMMin = '768px';
export const mediaSM = `@media (max-width: ${screenSMMin})`;
export const mediaPrint = '@media print';
export const baseFontSize = '0.9rem';
export const baseLineHeight = '1.7rem';

export const globalStyles = css`
  @font-face {
    font-family: 'Nanum Barun Gothic';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(/fonts/NanumBarunGothicUltraLight.eot);
    src: local('Nanum Barun Gothic UltraLight'),
      local('NanumBarunGothicUltraLight'),
      url(/fonts/NanumBarunGothicUltraLight.eot?#iefix)
        format('embedded-opentype'),
      url(/fonts/NanumBarunGothicUltraLight.woff2) format('woff2'),
      url(/fonts/NanumBarunGothicUltraLight.woff) format('woff'),
      url(/fonts/NanumBarunGothicUltraLight.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Nanum Barun Gothic';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(/fonts/NanumBarunGothicLight.eot);
    src: local('Nanum Barun Gothic Light'), local('NanumBarunGothicLight'),
      url(/fonts/NanumBarunGothicLight.eot?#iefix) format('embedded-opentype'),
      url(/fonts/NanumBarunGothicLight.woff2) format('woff2'),
      url(/fonts/NanumBarunGothicLight.woff) format('woff'),
      url(/fonts/NanumBarunGothicLight.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Nanum Barun Gothic';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/NanumBarunGothic.eot);
    src: local('Nanum Barun Gothic'), local('NanumBarunGothic'),
      url(/fonts/NanumBarunGothic.eot?#iefix) format('embedded-opentype'),
      url(/fonts/NanumBarunGothic.woff2) format('woff2'),
      url(/fonts/NanumBarunGothic.woff) format('woff'),
      url(/fonts/NanumBarunGothic.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Nanum Barun Gothic';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(/fonts/NanumBarunGothicBold.eot);
    src: local('Nanum Barun Gothic Bold'), local('NanumBarunGothicBold'),
      url(/fonts/NanumBarunGothicBold.eot?#iefix) format('embedded-opentype'),
      url(/fonts/NanumBarunGothicBold.woff2) format('woff2'),
      url(/fonts/NanumBarunGothicBold.woff) format('woff'),
      url(/fonts/NanumBarunGothicBold.ttf) format('truetype');
  }

  @font-face {
    font-family: 'SAO UI';
    font-style: normal;
    font-weight: normal;
    src: url(/fonts/SAOUI-Regular.eot);
    src: url(/fonts/SAOUI-Regular.eot?#iefix) format('embedded-opentype'),
      url(/fonts/SAOUI-Regular.woff2) format('woff2'),
      url(/fonts/SAOUI-Regular.woff) format('woff'),
      url(/fonts/SAOUI-Regular.ttf) format('truetype');
  }

  @font-face {
    font-family: 'SAO UI';
    font-style: normal;
    font-weight: bold;
    src: url(/fonts/SAOUI-Bold.eot);
    src: url(/fonts/SAOUI-Bold.eot?#iefix) format('embedded-opentype'),
      url(/fonts/SAOUI-Bold.woff2) format('woff2'),
      url(/fonts/SAOUI-Bold.woff) format('woff'),
      url(/fonts/SAOUI-Bold.ttf) format('truetype');
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  hr,
  dl,
  dd,
  ol,
  ul,
  figure {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${backgroudColor};
    color: ${textColor};
    font-family: 'Nanum Barun Gothic', Helvetica, AppleSDGothic, Arial,
      sans-serif;
    font-size: ${baseFontSize};
    font-weight: 300;
    line-height: ${baseLineHeight};
    text-size-adjust: 100%;
  }

  h1 {
    font-family: 'SAO UI', 'Nanum Barun Gothic', sans-serif;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  h2 {
    font-family: 'SAO UI', 'Nanum Barun Gothic', sans-serif;
  }
  a {
    color: ${darken(0.2, brandColor)};
    text-decoration: underline;
  }
  a:hover {
    color: ${brandColor};
    text-decoration: underline;
  }
`;

const styles = {
  brandColor,
  screenSMMin,
  mediaSM,
  mediaPrint,
  baseFontSize,
  baseLineHeight,
  globalStyles,
};

export default styles;
