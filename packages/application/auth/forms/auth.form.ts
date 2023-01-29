import { AuthFormFields, AuthToken } from '@package/domain/auth';
import { Inject, Injectable } from '@package/infrastructure/ioc';
import * as yup from 'yup';
import { AnyObject, ObjectShape, OptionalObjectSchema, TypeOfShape } from 'yup/lib/object';

import { BaseFormImpl, ChangeForm } from '../../_shared/forms';
import { AuthService, AuthServiceType } from '../services';

export type AuthFormSubmitResponse = Promise<AuthToken>;

export type ValidationSchema = OptionalObjectSchema<
  ObjectShape,
  AnyObject,
  TypeOfShape<ObjectShape>
>;

@Injectable()
export class AuthForm extends BaseFormImpl<AuthFormFields, AuthFormSubmitResponse> {
  constructor(@Inject(AuthServiceType) private readonly _authService: AuthService) {
    super();
  }

  getInitialValues(): AuthFormFields {
    return new AuthFormFields(null, null);
  }

  validationSchema(): ValidationSchema {
    return yup.object().shape({
      login: yup.string().required().nullable().email().label('Login'),
      password: yup.string().required().nullable().label('Password'),
    });
  }

  handleSubmit = (values: AuthFormFields): AuthFormSubmitResponse => {
    return this._authService.login(values?.login, values?.password);
  };

  handleChange = (values: AuthFormFields): ChangeForm<AuthFormFields> => {
    return {
      fields: values,
    };
  };
}
