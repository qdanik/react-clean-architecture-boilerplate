import './themes.less';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    --defaultWhite: #fff;

    margin: 0;
    padding: 0;
    font-family: 'Open Sans';
    color: var(--white);
    background-color: var(--primary1);

    & > div#root {
      position: relative;
      display: flex;
      padding: 0;
      min-height: 100vh;
    }
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
`;
