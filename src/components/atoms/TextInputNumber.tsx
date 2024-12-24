"use client";

import React from "react";
import { Input } from "@nextui-org/react";
import { ITextInputNumber } from "@/types/components/atom";

const TextInputNumber = ({
  placeholder,
  value,
  label,
  isDisabled,
  startIcon,
  endIcon,
  handleChange,
}: ITextInputNumber) => {
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (inputValue.startsWith("0") && inputValue.length > 1) {
      inputValue = inputValue.replace(/^0+/, "");
    }

    if (
      (/^(0|[1-9]\d*)$/.test(inputValue) || inputValue === "") &&
      handleChange
    ) {
      handleChange(inputValue);
    }
  };

  return (
    <Input
      type="tel"
      radius="sm"
      label={label ? label : null}
      startContent={startIcon ? startIcon : null}
      endContent={endIcon ? endIcon : null}
      placeholder={placeholder}
      value={value}
      isDisabled={isDisabled}
      onChange={handleChangeValue}
    />
  );
};

export default TextInputNumber;
