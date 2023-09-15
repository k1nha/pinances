export type FormProps<T> = {
  data?: T;
  onSubmit: (vars: T) => void;
  validationSchema?: any;
  id?: string;
  disabled?: boolean;
};
