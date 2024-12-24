"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { IdCard } from "lucide-react";

interface ITextInputIdentity {
  placeholder?: string;
  value: string;
  label?: string;
  handleChangeValue: (value: string) => void;
  handleChangeIdentity: (value: string) => void;
}

const TextInputIdentity: React.FC<ITextInputIdentity> = ({
  placeholder,
  value,
  label,
  handleChangeValue,
  handleChangeIdentity,
}) => {
  const [selectedIdentity, setSelectedIdentity] = useState("ktp");

  const identityTypes = {
    ktp: "KTP",
    sim: "SIM",
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeValue(e.target.value);
  };

  const handleIdentityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newIdentity = e.target.value;
    setSelectedIdentity(newIdentity);
    handleChangeIdentity(newIdentity);
  };

  return (
    <Input
      type="text"
      radius="sm"
      label={label ? label : undefined}
      startContent={
        <div className="h-full -ml-2 flex items-center justify-center">
          <div className="h-full flex items-center justify-center px-2 border-r-3 border-white">
            <IdCard size={20} />
          </div>
        </div>
      }
      endContent={
        <div className="flex items-center">
          <select
            className="outline-none border-0 bg-transparent text-default-400 text-small"
            value={selectedIdentity}
            onChange={handleIdentityChange}
          >
            {Object.keys(identityTypes).map((key) => (
              <option key={key} value={key}>
                {identityTypes[key]}
              </option>
            ))}
          </select>
        </div>
      }
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default TextInputIdentity;
