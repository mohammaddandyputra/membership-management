"use client";

import { ErrorValidation } from "@/components/atoms";
import { IFormLabel } from "@/types/components/molecule";

const FormLabel = ({
  label,
  form,
  labelPositionTop,
  widthLabel,
  widthForm,
  classNameLabel,
  classNameForm,
  errors,
}: IFormLabel) => {
  return (
    <>
      <div className={`${labelPositionTop ? `` : `flex`}`}>
        <div
          className={`${widthLabel ? widthLabel : ""} ${
            classNameLabel ? classNameLabel : ""
          } ${labelPositionTop ? `ml-1` : ``} text-xs text-brisma font-medium`}
        >
          {label}
        </div>
        <div
          className={`${widthForm} ${classNameForm ? classNameForm : ""} ${
            labelPositionTop ? "mt-1.5" : "ml-2"
          }`}
        >
          {form}
        </div>
      </div>
      {errors && (
        <div className="-mt-4">
          <ErrorValidation message={errors} />
        </div>
      )}
    </>
  );
};

export default FormLabel;
