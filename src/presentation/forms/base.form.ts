import { Form } from 'core/form';

export type ChangeForm<Fields> = {
  fields?: Fields;
};

export interface BaseForm<Fields, SubmitResponse> {
  api: Form<Fields>;

  getInitialValues(): Fields;

  validationSchema(): any;

  handleChange(values?: Fields): ChangeForm<Fields>;

  handleSubmit(values?: Fields): SubmitResponse;
}
