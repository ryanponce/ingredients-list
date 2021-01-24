import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    background: #fff;
  }

  body {
    font-family: "LL Circular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 300;
    color: #142B6f;
  }

  @font-face {
    font-display: fallback;
    font-family: "LL Circular";
    font-weight: 300;
    font-style: normal;
    src: url("https://fonts.ritual.com/Circular/Book/css/fonts/lineto-circular-book.woff2")
        format("woff2"),
      url("https://fonts.ritual.com/Circular/Book/css/fonts/lineto-circular-book.woff")
        format("woff");
  }
  @font-face {
    font-display: fallback;
    font-family: "LL Circular";
    font-weight: 300;
    font-style: italic;
    src: url("https://fonts.ritual.com/Circular/BookItalic/css/fonts/lineto-circular-bookItalic.woff2")
        format("woff2"),
      url("https://fonts.ritual.com/Circular/BookItalic/css/fonts/lineto-circular-bookItalic.woff")
        format("woff");
  }
  @font-face {
    font-display: fallback;
    font-family: "LL Circular";
    font-weight: 500;
    font-style: normal;
    src: url("https://fonts.ritual.com/Circular/Medium/css/fonts/lineto-circular-medium.woff2")
        format("woff2"),
      url("https://fonts.ritual.com/Circular/Medium/css/fonts/lineto-circular-medium.woff")
        format("woff");
  }
  @font-face {
    font-display: fallback;
    font-family: "LL Circular";
    font-weight: 500;
    font-style: italic;
    src: url("https://fonts.ritual.com/Circular/MediumItalic/css/fonts/lineto-circular-mediumItalic.woff2")
        format("woff2"),
      url("https://fonts.ritual.com/Circular/MediumItalic/css/fonts/lineto-circular-mediumItalic.woff")
        format("woff");
  }
  @font-face {
    font-display: fallback;
    font-family: "LL Circular";
    font-weight: 700;
    font-style: normal;
    src: url("https://fonts.ritual.com/Circular/Bold/css/fonts/lineto-circular-bold.woff2")
        format("woff2"),
      url("https://fonts.ritual.com/Circular/Bold/css/fonts/lineto-circular-bold.woff")
        format("woff");
  }
  @font-face {
    font-display: fallback;
    font-family: "Dutch801";
    font-weight: normal;
    font-style: normal;
    src: url("https://fonts.ritual.com/Dutch801/webfonts/3653C9_0_0.woff2")
        format("woff2"),
      url("https://fonts.ritual.com/Dutch801/webfonts/3653C9_0_0.woff")
        format("woff");
  }
  @font-face {
    font-display: fallback;
    font-family: "Dutch801";
    font-weight: normal;
    font-style: italic;
    src: url("https://fonts.ritual.com/Dutch801/webfonts/3653C9_1_0.woff2")
        format("woff2"),
      url("https://fonts.ritual.com/Dutch801/webfonts/3653C9_1_0.woff")
        format("woff");
  }
`;

export { GlobalStyle };
