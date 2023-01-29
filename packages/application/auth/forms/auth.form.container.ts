import { AuthFormFields } from '@package/domain/auth';
import { ioc, ServiceIdentifier } from '@package/infrastructure/ioc';

import { BaseForm } from '../../_shared/forms';
import { AuthForm, AuthFormSubmitResponse } from './auth.form';

const AuthFormType: ServiceIdentifier<BaseForm<AuthFormFields, AuthFormSubmitResponse>> =
  Symbol('AuthForm');

ioc.bind(AuthFormType).to(AuthForm);
export { AuthForm, AuthFormType };
export type { AuthFormSubmitResponse };
