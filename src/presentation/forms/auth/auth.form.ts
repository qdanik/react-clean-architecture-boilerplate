import * as yup from 'yup';
import { AnyObject, ObjectShape, OptionalObjectSchema, TypeOfShape } from 'yup/lib/object';

import { Inject, Injectable } from 'containers/config';
import { AuthFormFields, AuthService, AuthServiceType, AuthToken } from 'domain/auth';

import { ChangeForm } from '../base.form';
import { BaseFormImpl } from '../base.form.impl';

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
