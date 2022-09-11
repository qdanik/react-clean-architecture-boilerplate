import React, { ReactElement } from 'react';

import { Trans } from './trans.component';

export const translate = (key: string): ReactElement => <Trans i18nKey={key} />;
