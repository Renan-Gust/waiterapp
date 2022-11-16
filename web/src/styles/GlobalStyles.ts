import { createGlobalStyle } from 'styled-components';

import GeneralSansRegularWoff2 from '/fonts/GeneralSans-Regular.woff2';
import GeneralSansRegularWoff from '/fonts/GeneralSans-Regular.woff';
import GeneralSansRegularTtf from '/fonts/GeneralSans-Regular.ttf';
import GeneralSansMediumWoff2 from '/fonts/GeneralSans-Medium.woff2';
import GeneralSansMediumWoff from '/fonts/GeneralSans-Medium.woff';
import GeneralSansMediumTtf from '/fonts/GeneralSans-Medium.ttf';
import GeneralSansSemiboldWoff2 from '/fonts/GeneralSans-Semibold.woff2';
import GeneralSansSemiboldWoff from '/fonts/GeneralSans-Semibold.woff';
import GeneralSansSemiboldTtf from '/fonts/GeneralSans-Semibold.ttf';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'GeneralSans';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansRegularWoff2}') format('woff2'),
          url('${GeneralSansRegularWoff}') format('woff'),
          url('${GeneralSansRegularTtf}') format('truetype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansMediumWoff2}') format('woff2'),
          url('${GeneralSansMediumWoff}') format('woff'),
          url('${GeneralSansMediumTtf}') format('truetype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansSemiboldWoff2}') format('woff2'),
          url('${GeneralSansSemiboldWoff}') format('woff'),
          url('${GeneralSansSemiboldTtf}') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GeneralSans, sans-serif;
  }

  body {
    background: #fafafa;
    color: #333;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }
`;
