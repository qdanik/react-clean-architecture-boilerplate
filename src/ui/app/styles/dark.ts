import {css} from 'styled-components';

export const DarkVariables = css`
  &.dark {
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
`;