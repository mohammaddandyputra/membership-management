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

export interface IFormProfileData {
  payload: Record<string, any>;
  validation: Validation;
  handleChangeStep: (value: string) => void;
  handleChangePayload: (
    property: string,
    value: string | number | boolean | null
  ) => void;
}

export interface IFormMembershipList {
  data: Record<string, any>[];
  payload: Record<string, any>;
  validation: Validation;
  handleChangeStep: (value: string) => void;
  handleChangePayload: (
    property: string,
    value: string | number | boolean | null
  ) => void;
  handleSubmit: () => Promise<void>;
}
