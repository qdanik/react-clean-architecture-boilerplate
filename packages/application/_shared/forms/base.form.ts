import { Form } from '@package/infrastructure/form';

export type ChangeForm<Values> = {
  fields?: Values;
};

export interface BaseForm<Values, SubmitResponse, ValidationSchema = unknown> {
  api: Form<Values>;

  getInitialValues(): Values;

  validationSchema(): ValidationSchema;

  handleChange(values?: Values): ChangeForm<Values>;

  handleSubmit(values?: Values): SubmitResponse;
}
