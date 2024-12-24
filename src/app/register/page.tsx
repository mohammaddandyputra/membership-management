"use client";

import { InstallPWAButton } from "@/components/atoms";
import { CardFormRegister } from "@/components/molecules/register";
import { MainLayout } from "@/layouts";
import { IHandleChangePayload } from "@/types/util";
import { useState } from "react";

const Home = () => {
  const [payload, setPayload] = useState({});
  const [validation, setValidation] = useState({});

  const handleChangePayload: IHandleChangePayload = (key, value) => {
    setPayload((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <MainLayout isBlankLayout>
      <div className="p-4">
        <CardFormRegister
          data={payload}
          validation={validation}
          handleChangePayload={handleChangePayload}
        />
      </div>
      {/* <InstallPWAButton /> */}
    </MainLayout>
  );
};

export default Home;
