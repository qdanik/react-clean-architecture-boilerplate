import * as yup from 'yup';
import { Inject, Injectable } from 'containers/config';
import { AuthFormFields } from 'domain/auth/entities/auth-form-fields.entity';
import { AuthToken } from 'domain/auth/entities/auth-token.entity';
import { AuthService, AuthServiceType } from 'domain/auth/services';
import { ChangeForm } from '../base.form';
import { BaseFormImpl } from '../base.form.impl';

@Injectable()
export class AuthForm extends BaseFormImpl<AuthFormFields> {
  constructor(@Inject(AuthServiceType) private readonly _authService: AuthService) {
    super();
  }

  getInitialValues(): AuthFormFields {
    return new AuthFormFields(null, null);
  }

  validationSchema(): any {
    return yup.object().shape({
      login: yup.string().required().nullable().email().label('Login'),
      password: yup.string().required().nullable().label('Password'),
    });
  }

  handleSubmit = (values: AuthFormFields): Promise<AuthToken> => {
    return this._authService.login(values?.login, values?.password);
  };

  handleChange = (values: AuthFormFields): ChangeForm<AuthFormFields> => {
    return {
      fields: values,
    };
  };
}
