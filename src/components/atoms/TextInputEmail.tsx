"use client";

import React from "react";
import { Input } from "@nextui-org/react";
import { Mail } from "lucide-react";
import { ITextInputEmail } from "@/types/components/atom";

const TextInputEmail = ({
  placeholder,
  value,
  label,
  handleChange,
}: ITextInputEmail) => {
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ((emailRegex.test(inputValue) || inputValue === "") && handleChange) {
      handleChange(inputValue);
    }
  };

  return (
    <Input
      type="email"
      radius="sm"
      label={label ? label : undefined}
      startContent={
        <div className="h-full -ml-2 flex items-center justify-center">
          <div className="h-full flex items-center justify-center px-2 border-r-3 border-white">
            <Mail size={20} />
          </div>
        </div>
      }
      placeholder={placeholder}
      value={value}
      onChange={handleChangeValue}
    />
  );
};

export default TextInputEmail;
