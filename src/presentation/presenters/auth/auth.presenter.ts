import { AuthFormFields } from 'domain/auth/entities/auth-form-fields.entity';
import { BaseForm } from 'presentation/forms/base.form';

export interface AuthPresenter {
  form: BaseForm<AuthFormFields>;
}
