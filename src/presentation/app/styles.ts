import AcuminProExtraCond from 'assets/fonts/AcuminProExtraCond-Bold.woff2'
import ProximaNovaSoftBold from 'assets/fonts/ProximaNovaSoft-Bold.woff2'
import ProximaNovaSoftRegular from 'assets/fonts/ProximaNovaSoft-Regular.woff2'
import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: var(--white);
    font-family: var(--fontText);
    background-color: var(--gray3);

    & > div#root {
      position: relative;
      display: flex;
      padding: 15px;
      min-height: 100vh;
    }

    --defaultWhite: #fff;

    --fontText: 'ProximaNovaSoftW03';
    --fontActions: 'AcuminProExtraCond';
  }
  
  .dark {
    --white: #FFFFFF;
    --placeholder: #7c7c7c;
    --gray: #F5F5F5;
    --gray2: #A6A6A6;
    --gray3: #393E43;
    --gray4: #2B2F33;
    --gray5: #212529;
    --gray6: #32363B;
    --green: #B2D135;
    --green2: #98B336;
    --red: #F44336;
    --orange: #F26A24;
    --shadowColor: rgba(43, 47, 51, 0.65);
    --invertShadowColor: rgba(166, 166, 166, 0.3);
    --shadow: 0px 0px 5px var(--shadowColor);
    --invertShadow: 0px 0px 5px var(--invertShadowColor);
  }
  
  .light {
    --white: #2A2A2A;
    --placeholder: #7c7c7c;
    --gray: #4A4A4A;
    --gray2: #A6A6A6;
    --gray3: #F5F5F5;
    --gray4: #FFFFFF;
    --gray5: #E4E4E4;
    --gray6: #F5F5F5;
    --green: #B2D135;
    --green2: #98B336;
    --red: #F44336;
    --orange: #F26A24;
    --shadowColor: rgba(166, 166, 166, 0.3);
    --invertShadowColor: rgba(43, 47, 51, 0.65);
    --shadow: 0px 0px 5px var(--shadowColor);
    --invertShadow: 0px 0px 5px var(--invertShadowColor);
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  button {
    border: unset;
    outline: unset;
    background: unset;
    padding: unset;

    &:hover {
      cursor: pointer;
    }
  }

  @font-face {
    font-family: "AcuminProExtraCond";
    font-weight: 600;
    src: url(${AcuminProExtraCond}) format("woff2");
  }

  @font-face {
    font-family: "ProximaNovaSoftW03";
    font-weight: 600;
    src: url(${ProximaNovaSoftBold}) format("woff2");
  }
  
  @font-face {
    font-family: "ProximaNovaSoftW03";
    src: url(${ProximaNovaSoftRegular}) format("woff2");
  }
`;