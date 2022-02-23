import { AuthFormFields } from 'domain/auth/entities/auth-form-fields.entity';
import { AuthFormSubmitResponse } from 'presentation/forms/auth/auth.form';
import { BaseForm } from 'presentation/forms/base.form';

export interface AuthPresenter {
  form: BaseForm<AuthFormFields, AuthFormSubmitResponse>;
}
