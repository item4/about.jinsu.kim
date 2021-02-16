import { css } from '@emotion/react';
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
    font-family: '나눔바른고딕OTF', 'nanum-barun-gothic-otf', Helvetica,
      AppleSDGothic, Arial, sans-serif;
    font-size: ${baseFontSize};
    font-weight: 300;
    line-height: ${baseLineHeight};
    text-size-adjust: 100%;
  }

  h1 {
    font-family: 'Merriweather', serif;
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 2rem;
  }
  h2 {
    font-family: 'Merriweather', serif;
  }
  a {
    color: ${darken(0.2, brandColor)};
    text-decoration: underline;
  }
  a:hover {
    color: ${brandColor};
    text-decoration: underline;
  }

  @page {
    size: A4 portrait;
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
