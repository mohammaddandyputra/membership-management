"use client";

import { IErrorValidation } from "@/types/components/atom";

const ErrorValidation = ({ message, className }: IErrorValidation) => {
  return (
    <span className={`text-red-500 mt-1 text-xs ${className ? className : ""}`}>
      {message}
    </span>
  );
};

export default ErrorValidation;
