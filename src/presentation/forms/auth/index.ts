import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/core';
import { AuthForm } from './auth.form';

export const AuthFormType: ServiceIdentifier<AuthForm> = Symbol('AuthForm');

AppContainer.bind(AuthFormType).to(AuthForm);
