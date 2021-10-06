export type InputProps = {
  label?: string;
  value: any;
  placeholder?: string;
  inputRef?: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
};
