import { TFunction } from 'i18next';

import { AuthFormFields } from 'domain/auth';
import { AuthFormSubmitResponse } from 'presentation/forms/auth';
import { BaseForm } from 'presentation/forms/base.form';

export interface AuthPresenter {
  form: BaseForm<AuthFormFields, AuthFormSubmitResponse>;
  t: TFunction;
}
