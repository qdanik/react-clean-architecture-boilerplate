import React from 'react';
import { Form, Button, Input } from 'presentation/web/components/form';
import { AuthProps } from './auth.typings';

export function Auth({ presenter }: AuthProps): React.ReactElement {
  return (
    <Form entity={presenter?.form}>
      <Input label={presenter?.t('auth.form.labels.login')} name="login" />
      <Button>{presenter?.t('button:login')}</Button>
    </Form>
  );
}
