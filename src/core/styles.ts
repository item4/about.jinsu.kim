import { css } from '@emotion/react';
import darken from 'polished/lib/color/darken';

export const brand_color = '#39f';
export const background_color = '#fff';
export const text_color = '#000';
export const screen_sm_min = '768px';
export const media_sm = `@media (max-width: ${screen_sm_min})`;
export const media_print = '@media print';
export const base_font_size = '0.9rem';
export const base_line_height = '1.7rem';
export const link_color = darken(0.2, brand_color);

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
    background-color: ${background_color};
    color: ${text_color};
    font-family: '나눔바른고딕OTF', nanum-barun-gothic-otf, '나눔바른고딕',
      nanum-barun-gothic, Helvetica, AppleSDGothic, Arial, sans-serif;
    font-size: ${base_font_size};
    font-weight: 400;
    line-height: ${base_line_height};
  }

  h1 {
    font-family: Merriweather, serif;
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-family: Merriweather, serif;
  }

  a {
    color: ${link_color};
    cursor: pointer;
    text-decoration: underline;
  }

  a:hover {
    color: ${brand_color};
    text-decoration: underline;
  }

  ${media_print} {
    @page {
      margin: 0;
      size: a4 portrait;
    }

    body {
      margin-top: 1cm;
    }
  }
`;

const styles = {
  brand_color,
  screen_sm_min,
  media_sm,
  media_print,
  base_font_size,
  base_line_height,
  globalStyles,
};

export default styles;
