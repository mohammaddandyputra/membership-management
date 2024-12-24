export interface IErrorValidation {
  message: string;
  className?: string;
}

export interface ITextInputEmail {
  placeholder: string;
  value?: string;
  label?: string;
  handleChange?: (value: string) => void;
}

export interface ITextInputPhoneNumber {
  placeholder: string;
  value?: string;
  selectValue?: string;
  label?: string;
  handleChange?: (value: string) => void;
  handleChangeSelect?: (value: string) => void;
}

export interface ITextInputNominal {
  placeholder: string;
  value?: string;
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  handleChange?: (value: string) => void;
}

export interface ITextInputPassword {
  withIcon?: boolean;
  placeholder?: string;
}

export interface ITextInputNumber {
  placeholder: string;
  value: string;
  label?: string;
  isDisabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  handleChange?: (value: string) => void;
}
