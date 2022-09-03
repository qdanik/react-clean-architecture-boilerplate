import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';
import { AuthFormFields } from 'domain/auth';

import { BaseForm } from '../base.form';
import { AuthForm, AuthFormSubmitResponse } from './auth.form';

const AuthFormType: ServiceIdentifier<BaseForm<AuthFormFields, AuthFormSubmitResponse>> =
  Symbol('AuthForm');

AppContainer.bind(AuthFormType).to(AuthForm);
export { AuthForm, AuthFormType };
export type { AuthFormSubmitResponse };
