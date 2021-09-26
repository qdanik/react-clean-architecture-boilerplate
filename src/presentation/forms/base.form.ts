export type ChangeForm<Fields, Result = unknown> = {
  fields?: Fields;
} & Result;

export interface BaseForm<Fields, SubmitResult = any, ChangeResult = unknown> {
  getInitialValues(): Fields;

  getValidationSchema(): any;

  onChange(values: Fields): ChangeForm<Fields, ChangeResult>;

  onSubmit(values: Fields): Promise<SubmitResult>;
}
