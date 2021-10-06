import React from 'react';
import { AuthPresenterType } from 'presentation/presenters/auth';
import { useInjection } from 'presentation/web/components';
import { Form, Button, Input } from 'presentation/web/components/form';

export function Auth(): React.ReactElement {
  const authPresenter = useInjection(AuthPresenterType);

  return (
    <Form entity={authPresenter.form}>
      <Input label="Login" name="login" />
      <Button>sign in</Button>
    </Form>
  );
}
