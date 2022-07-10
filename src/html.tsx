import React from 'react';

interface HTMLProps {
  htmlAttributes: React.HTMLAttributes<HTMLHtmlElement>;
  headComponents: React.ReactNode;
  bodyAttributes: React.HTMLAttributes<HTMLBodyElement>;
  preBodyComponents: React.ReactNode;
  body: string;
  postBodyComponents: React.ReactNode;
}

const HTML: React.FC<HTMLProps> = props => {
  return (
    <html {...props.htmlAttributes}>
      <head>{props.headComponents}</head>
      <body vocab='http://schema.org/' typeof='Blog' {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key='noscript' id='gatsby-noscript'>
          About Jinsu Kim에 접속하시려면 JavaScript를 활성화해주세요.
        </noscript>
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};
export default HTML;
