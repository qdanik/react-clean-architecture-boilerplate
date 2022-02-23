import React from 'react';
import { Form, Button, Input } from 'presentation/web/components/form';
import { AuthProps } from './auth.typings';

export function Auth({ presenter }: AuthProps): React.ReactElement {
  return (
    <Form entity={presenter.form}>
      <Input label="Login" name="login" />
      <Button>sign in</Button>
    </Form>
  );
}
