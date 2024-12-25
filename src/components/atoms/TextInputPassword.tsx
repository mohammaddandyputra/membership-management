"use client";

import { ITextInputPassword } from "@/types/components/atom";
import { Input } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const TextInputPassword = ({ withIcon, placeholder }: ITextInputPassword) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      type={isVisible ? "text" : "password"}
      placeholder={placeholder ? placeholder : ""}
      labelPlacement="outside"
      // startContent={
      //   <div className="mr-2">
      //     <KeyRound />
      //   </div>
      // }
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
          aria-label="toggle password visibility"
        >
          {isVisible ? <EyeOff /> : <Eye />}
        </button>
      }
    />
  );
};

export default TextInputPassword;
