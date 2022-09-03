import React from 'react';
import Logo from 'assets/images/logo.svg';

import { Form, FormButton, FormInput } from 'presentation/web/components/form';

import { AuthProps } from './auth.types';

export function Auth({ presenter }: AuthProps): React.ReactElement {
  return (
    <Form entity={presenter?.form}>
      <Logo style={{ display: 'block', height: '100px', margin: '10px auto', width: '100px' }} />
      <FormInput label={presenter?.t('auth.form.labels.login')} name="login" />
      <FormButton>{presenter?.t('button.login')}</FormButton>
    </Form>
  );
}
