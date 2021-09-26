import * as yup from 'yup';
import { Inject, Injectable } from 'containers/core';
import { AuthToken } from 'domain/auth/entities/auth-token.entity';
import { AuthService, AuthServiceType } from 'domain/auth/services';
import { BaseForm, ChangeForm } from '../base.form';

export interface AuthFormFields {
  login: string;
  password: string;
}

@Injectable()
export class AuthForm implements BaseForm<AuthFormFields, AuthToken> {
  constructor(@Inject(AuthServiceType) private readonly _authService: AuthService) {}

  getInitialValues(): AuthFormFields {
    return {
      login: null,
      password: null,
    };
  }

  getValidationSchema(): any {
    return yup.object().shape({
      login: yup.string().required().nullable().email().label('Login'),
      password: yup.string().required().nullable().label('Password'),
    });
  }

  onSubmit(values: AuthFormFields): Promise<AuthToken> {
    return this._authService.login(values?.login, values?.password);
  }

  onChange(): ChangeForm<AuthFormFields> {
    return null;
  }
}
