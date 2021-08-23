import { css } from "styled-components";
import * as mixins from "../old";

import defaultTheme from "./themes/theme";

const defaultGlobalStyles = (theme=defaultTheme) => {
  return css`
    *,
    *:before,
    *:after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      min-height: 100%;
      position: relative;
    }

    body {
      background-color: ${theme.colors.background.medium};
      font-family: ${theme.font.family};
      ${mixins.bpEach("font-size", theme.font.size)}
      color: ${theme.colors.text};
      margin: 0;
      ${mixins.bpEither("margin-bottom", theme.dimensions.footer.height)}
      line-height: 1.5;
      text-rendering: optimizeLegibility;
    }

    a,
    a:hover,
    a:visited,
    a:active {
      color: black;
      color: currentColor;
      font-weight: bold;
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4 {
      ${mixins.bpEach("margin-top", theme.font.size)}
      ${mixins.bpEach("margin-bottom", theme.font.size)}
    }

    img {
      vertical-align: bottom;
    }

    @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700|Lora:400,700|Montserrat:400,600");

    p,
    ul,
    ol {
      font-family: ${theme.font.paragraph};
      font-size: 1em;
    }

    p {
      ${mixins.bpEach("margin-bottom", theme.font.size)}

      a {
        &,
        &:hover,
        &:visited,
        &:active {
          text-decoration: underline;
          font-weight: bold;
          color: ${theme.colors.link};
        }

        &:hover,
        &:active {
          color: ${theme.colors.linkHover};
          opacity: 0.7;
        }
      }

      img {
        max-width: 100%;
      }
    }

    ul,
    ol,
    li {
      ${mixins.bpEach("margin-bottom", theme.font.size)};
    }

    ul,
    ol,
    li {
      margin-left: 1.5em;
    }

    h1,
    h2,
    h3 {
      display: inline-block;

      :after {
        padding: 0.1em 0;
        content: "";
        display: block;
        width: 5em;
        border-bottom: 0.4em solid ${theme.colors.background.medium};
      }
    }

    hr {
      border: 0;
      border-top: 0.4em solid ${theme.colors.background.medium};
      margin: 2em 0;
    }
  `;
};

export default defaultGlobalStyles;
