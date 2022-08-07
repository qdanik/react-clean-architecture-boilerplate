import React from 'react';

import { Form, FormButton, FormInput } from 'presentation/web/components/form';

import { AuthProps } from './auth.typings';

export function Auth({ presenter }: AuthProps): React.ReactElement {
  return (
    <Form entity={presenter?.form}>
      <FormInput label={presenter?.t('auth.form.labels.login')} name="login" />
      <FormButton>{presenter?.t('button.login')}</FormButton>
    </Form>
  );
}
