import { FieldProps, FormikConfig } from 'formik';

export enum FormFieldType {
  Input = 'Input',
}

export interface FormField {
  fieldType?: FormFieldType;
  // Custom Component props
  label?: string;
  // Formik Field props
  name: string;
  type?: string;
  placeholder?: string;
  children?: React.ReactElement | ((props: FieldProps) => React.ReactElement);
  component?: string | React.ComponentType<FieldProps>;
  render?: (props: FieldProps) => React.ReactElement;
  validate?: <T>(value: T) => undefined | string | Promise<T>;
}

export interface FormProps<Values> extends FormikConfig<Values> {
  fields: FormField[];
}
