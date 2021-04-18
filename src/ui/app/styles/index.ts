import { createGlobalStyle } from 'styled-components';
import { DarkVariables } from './dark';
import { AppFonts } from './font';
import { LightVariables } from './light';

export const GlobalStyles = createGlobalStyle`
  ${AppFonts};

  body {
    --defaultWhite: #fff;

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

    ${DarkVariables};
    ${LightVariables};
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
