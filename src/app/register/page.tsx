"use client";

import {
  FormMembershipType,
  FormProfileData,
  RegistrationSuccessWithBarcode,
} from "@/components/molecules/register";
import { MainLayout } from "@/layouts";
import { IHandleChangePayload } from "@/types/util";
import { useEffect, useState } from "react";

const membershipList = [
  {
    id: 1,
    title: "Membership - 1 Bulan",
    description:
      "Nikmati kebebasan dalam merawat kesehatanmu dengan Membership 1 Bulan. Program ini dirancang untuk memberikan fleksibilitas tinggi, cocok bagi kamu yang ingin mencoba fasilitas kesehatan kami tanpa komitmen panjang. Ideal untuk kamu yang baru memulai atau hanya ingin merasakan pengalaman sehat dalam waktu singkat.",
  },
  {
    id: 2,
    title: "Membership - 3 Bulan",
    description:
      "Dengan Membership 3 Bulan, kamu mendapatkan lebih banyak waktu untuk menjelajahi semua fasilitas kesehatan kami. Program ini memberi kamu kesempatan untuk membangun rutinitas sehat yang lebih konsisten. Cocok bagi yang ingin mulai lebih serius menjaga kebugaran dengan fleksibilitas yang masih terjangkau.",
  },
  {
    id: 3,
    title: "Membership - 6 Bulan",
    description:
      "Dapatkan manfaat jangka menengah dengan Membership 6 Bulan. Program ini memberikan keseimbangan yang sempurna antara komitmen dan manfaat jangka panjang. Dengan enam bulan, kamu dapat lebih fokus pada pencapaian kesehatan optimal dan memperbaiki gaya hidup sehat secara menyeluruh, dengan biaya yang lebih hemat.",
  },
  {
    id: 4,
    title: "Membership - 9 Bulan",
    description:
      "Membership 9 Bulan adalah pilihan tepat bagi kamu yang ingin merasakan perubahan signifikan dalam hidup sehat. Dengan program ini, kamu dapat lebih mendalami dan menikmati fasilitas kesehatan kami tanpa harus khawatir tentang biaya harian. Tujuh hingga sembilan bulan adalah waktu ideal untuk membentuk kebiasaan sehat yang berkelanjutan.",
  },
  {
    id: 5,
    title: "Membership - 1 Tahun",
    description:
      "Membership 1 Tahun memberikan kamu kebebasan penuh untuk menikmati segala fasilitas kami sepanjang tahun. Dengan komitmen yang lebih lama, kamu akan merasakan dampak positif dalam kesehatan tubuh dan gaya hidup. Ideal bagi yang siap berinvestasi untuk kesehatannya dan menginginkan perjalanan panjang menuju tubuh yang lebih sehat dan bugar.",
  },
];

const Home = () => {
  const [payload, setPayload] = useState({});
  const [validation, setValidation] = useState({});
  const [step, setStep] = useState("profile-data");

  useEffect(() => {
    console.log("step => ", step);
  }, [step]);

  const handleChangePayload: IHandleChangePayload = (key, value) => {
    setPayload((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleChangeStep = (value: string) => {
    setStep(value);
  };

  const handleSubmit = async () => {
    setStep("registration-success");
  };

  return (
    <MainLayout isBlankLayout>
      {step === "profile-data" ? (
        <FormProfileData
          payload={payload}
          validation={validation}
          handleChangeStep={handleChangeStep}
          handleChangePayload={handleChangePayload}
        />
      ) : step === "membership-type" ? (
        <FormMembershipType
          data={membershipList}
          payload={payload}
          validation={validation}
          handleChangeStep={handleChangeStep}
          handleChangePayload={handleChangePayload}
          handleSubmit={handleSubmit}
        />
      ) : step === "registration-success" ? (
        <RegistrationSuccessWithBarcode />
      ) : (
        ""
      )}
    </MainLayout>
  );
};

export default Home;
