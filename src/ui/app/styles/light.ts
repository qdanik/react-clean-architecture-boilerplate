import {css} from 'styled-components';

export const LightVariables = css`  
  &.light {
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
`;