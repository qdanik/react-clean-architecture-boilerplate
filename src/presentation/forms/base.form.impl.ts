/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from 'containers/config';
import { Form, FormType } from 'core/form';
import { BaseForm, ChangeForm } from './base.form';

@Injectable()
export abstract class BaseFormImpl<Fields> implements BaseForm<Fields> {
  @Inject(FormType) api: Form<Fields>;

  getInitialValues(): Fields {
    throw new Error('Method getInitialValues is not implemented');
  }

  validationSchema(): any {
    throw new Error('Method validationSchema is not implemented');
  }

  handleChange = (values?: Fields): ChangeForm<Fields> => {
    throw new Error(`Method onChange is not implemented!`);
  };

  handleSubmit = (values?: Fields): any | Promise<any> => {
    throw new Error('Method onSubmit is not implemented');
  };
}
