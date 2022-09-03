/* eslint-disable class-methods-use-this */
import { Inject, Injectable } from 'containers/config';
import { Form, FormType } from 'core/form';

import { BaseForm, ChangeForm } from './base.form';

@Injectable()
export abstract class BaseFormImpl<Values, SubmitResponse, ValidationSchema = unknown>
  implements BaseForm<Values, SubmitResponse, ValidationSchema>
{
  @Inject(FormType) api: Form<Values>;

  getInitialValues(): Values {
    throw new Error('Method getInitialValues is not implemented');
  }

  validationSchema(): ValidationSchema {
    throw new Error('Method validationSchema is not implemented');
  }

  handleChange = (_?: Values): ChangeForm<Values> => {
    throw new Error(`Method onChange is not implemented!`);
  };

  handleSubmit = (_?: Values): SubmitResponse => {
    throw new Error('Method onSubmit is not implemented');
  };
}
