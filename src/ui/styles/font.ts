import AcuminProExtraCond from '@assets/fonts/AcuminProExtraCond-Bold.woff2';
import ProximaNovaSoftBold from '@assets/fonts/ProximaNovaSoft-Bold.woff2';
import ProximaNovaSoftRegular from '@assets/fonts/ProximaNovaSoft-Regular.woff2';
import { css } from 'styled-components';

export const AppFonts = css`
  --fontText: 'ProximaNovaSoftW03';
  --fontActions: 'AcuminProExtraCond';

  @font-face {
    font-family: 'AcuminProExtraCond';
    font-weight: 600;
    src: url(${AcuminProExtraCond}) format('woff2');
  }

  @font-face {
    font-family: 'ProximaNovaSoftW03';
    font-weight: 600;
    src: url(${ProximaNovaSoftBold}) format('woff2');
  }

  @font-face {
    font-family: 'ProximaNovaSoftW03';
    src: url(${ProximaNovaSoftRegular}) format('woff2');
  }
`;
