import { Inject, Injectable } from 'containers/config';
import { AuthFormFields } from 'domain/auth/entities/auth-form-fields.entity';
import { AuthFormType } from 'presentation/forms/auth';
import { AuthFormSubmitResponse } from 'presentation/forms/auth/auth.form';
import { BaseForm } from 'presentation/forms/base.form';
import { AuthPresenter } from './auth.presenter';

@Injectable()
export class AuthPresenterImpl implements AuthPresenter {
  constructor(
    @Inject(AuthFormType) private readonly _form: BaseForm<AuthFormFields, AuthFormSubmitResponse>,
  ) {}

  public get form(): BaseForm<AuthFormFields, AuthFormSubmitResponse> {
    return this._form;
  }
}
