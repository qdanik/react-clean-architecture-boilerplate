import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';
import { AuthFormFields, AuthToken } from 'domain/auth';
import { AuthForm, AuthFormSubmitResponse } from './auth.form';
import { BaseForm } from '../base.form';

const AuthFormType: ServiceIdentifier<BaseForm<AuthFormFields, Promise<AuthToken>>> =
  Symbol('AuthForm');

AppContainer.bind(AuthFormType).to(AuthForm);

export { AuthForm, AuthFormType };
export type { AuthFormSubmitResponse };
