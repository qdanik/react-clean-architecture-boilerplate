import React from 'react';
import { Form, Button, Input } from 'presentation/web/components/form';
import { useTranslation } from 'presentation/web/components/i18n';
import { AuthProps } from './auth.typings';

export function Auth({ presenter }: AuthProps): React.ReactElement {
  const { t } = useTranslation();

  return (
    <Form entity={presenter.form}>
      <Input label={t('auth.form.labels.login')} name="login" />
      <Button>{t('button:login')}</Button>
    </Form>
  );
}
