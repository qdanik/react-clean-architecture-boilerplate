import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';
import { AuthFormFields } from 'domain/auth/entities/auth-form-fields.entity';
import { AuthToken } from 'domain/auth/entities/auth-token.entity';
import { AuthForm } from './auth.form';
import { BaseForm } from '../base.form';

export const AuthFormType: ServiceIdentifier<BaseForm<AuthFormFields, Promise<AuthToken>>> =
  Symbol('AuthForm');

AppContainer.bind(AuthFormType).to(AuthForm);
