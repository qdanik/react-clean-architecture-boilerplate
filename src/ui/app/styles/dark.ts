import { css } from 'styled-components'

export const DarkVariables = css`
  &.dark {
    --white: #ffffff;
    --placeholder: #7c7c7c;
    --gray: #f5f5f5;
    --gray2: #a6a6a6;
    --gray3: #393e43;
    --gray4: #2b2f33;
    --gray5: #212529;
    --gray6: #32363b;
    --green: #b2d135;
    --green2: #98b336;
    --red: #f44336;
    --orange: #f26a24;
    --shadowColor: rgba(43, 47, 51, 0.65);
    --invertShadowColor: rgba(166, 166, 166, 0.3);
    --shadow: 0px 0px 5px var(--shadowColor);
    --invertShadow: 0px 0px 5px var(--invertShadowColor);
  }
`
