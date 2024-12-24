"use client";

import React from "react";
import { Input } from "@nextui-org/react";
import { ITextInputNominal } from "@/types/components/atom";

const TextInputNominal = ({
  placeholder,
  value,
  label,
  startIcon,
  endIcon,
  handleChange,
}: ITextInputNominal) => {
  const formatNominal = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const unformatNominal = (value: string) => {
    return value.replace(/\./g, "");
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let unformattedValue = unformatNominal(inputValue);

    if (/^\d*$/.test(unformattedValue) && handleChange) {
      if (value === "0" && unformattedValue.length > 1) {
        unformattedValue = unformattedValue.replace(/^0+/, "");
      }
      handleChange(unformattedValue);
    }
  };

  return (
    <Input
      type="text"
      radius="sm"
      label={label ? label : undefined}
      startContent={startIcon ? startIcon : undefined}
      endContent={endIcon ? endIcon : undefined}
      placeholder={placeholder}
      value={value ? formatNominal(value) : ""}
      onChange={handleChangeValue}
    />
  );
};

export default TextInputNominal;
