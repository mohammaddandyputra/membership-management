"use client";

import React from "react";
import { Input } from "@nextui-org/react";
import { Phone } from "lucide-react";
import { ITextInputPhoneNumber } from "@/types/components/atom";

const TextInputPhoneNumber = ({
  placeholder,
  value,
  label,
  handleChange,
}: ITextInputPhoneNumber) => {
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (/^0+/.test(inputValue)) {
      inputValue = inputValue.replace(/^0+/, "");
    }

    if (/^\d*$/.test(inputValue) && handleChange) {
      handleChange(inputValue);
    }
  };

  return (
    <Input
      type="text"
      radius="sm"
      label={label ? label : undefined}
      startContent={
        <div className="h-full -ml-2 flex items-center justify-center">
          <div className="h-full flex items-center justify-center px-2 border-r-3 border-white">
            <Phone size={20} />
          </div>
        </div>
      }
      placeholder={placeholder}
      value={value}
      onChange={handleChangeValue}
    />
  );
};

export default TextInputPhoneNumber;
