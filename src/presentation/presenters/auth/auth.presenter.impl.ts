import { i18n as I18NextType, TFunction } from 'i18next';

import { Inject, Injectable } from 'containers/config';
import { I18n, I18nType } from 'core/i18n';
import { AuthFormFields } from 'domain/auth';
import { AuthFormSubmitResponse, AuthFormType } from 'presentation/forms/auth';
import { BaseForm } from 'presentation/forms/base.form';

import { AuthPresenter } from './auth.presenter';

@Injectable()
export class AuthPresenterImpl implements AuthPresenter {
  constructor(
    @Inject(AuthFormType) private readonly _form: BaseForm<AuthFormFields, AuthFormSubmitResponse>,
    @Inject(I18nType) private readonly _i18n: I18n<I18NextType>,
  ) {}

  public get form(): BaseForm<AuthFormFields, AuthFormSubmitResponse> {
    return this._form;
  }

  public get t(): TFunction {
    return this._i18n.getInstance().t;
  }
}
