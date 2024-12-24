interface Validation {
  [key: string]: string | undefined;
}

export interface IFormLabel {
  label: string;
  form: React.ReactNode;
  labelPositionTop?: boolean;
  widthLabel?: string;
  widthForm?: string;
  classNameLabel?: string;
  classNameForm?: string;
  errors?: string;
}

export interface ICardFormRegister {
  data: Record<string, any>;
  validation: Validation;
  handleChangePayload?: (
    property: string,
    value: string | number | boolean | null
  ) => void;
}
