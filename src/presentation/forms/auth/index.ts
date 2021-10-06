import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';
import { AuthFormFields } from 'domain/auth/entities/auth-form-fields.entity';
import { AuthForm } from './auth.form';
import { BaseForm } from '../base.form';

export const AuthFormType: ServiceIdentifier<BaseForm<AuthFormFields>> = Symbol('AuthForm');

AppContainer.bind(AuthFormType).to(AuthForm);
