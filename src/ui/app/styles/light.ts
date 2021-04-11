import { css } from 'styled-components'

export const LightVariables = css`
  &.light {
    --white: #2a2a2a;
    --placeholder: #7c7c7c;
    --gray: #4a4a4a;
    --gray2: #a6a6a6;
    --gray3: #f5f5f5;
    --gray4: #ffffff;
    --gray5: #e4e4e4;
    --gray6: #f5f5f5;
    --green: #b2d135;
    --green2: #98b336;
    --red: #f44336;
    --orange: #f26a24;
    --shadowColor: rgba(166, 166, 166, 0.3);
    --invertShadowColor: rgba(43, 47, 51, 0.65);
    --shadow: 0px 0px 5px var(--shadowColor);
    --invertShadow: 0px 0px 5px var(--invertShadowColor);
  }
`
