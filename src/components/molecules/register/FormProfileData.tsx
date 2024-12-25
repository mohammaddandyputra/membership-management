"use client";

import {
  Card,
  CardBody,
  DatePicker,
  Textarea,
  Checkbox,
  Input,
  Button,
} from "@nextui-org/react";
import { FormLabel } from "../common";
import {
  TextInputEmail,
  TextInputIdentity,
  TextInputPhoneNumber,
} from "@/components/atoms";
import { IFormProfileData } from "@/types/components/molecule";
import { ChevronRight } from "lucide-react";

const FormProfileData = ({
  payload,
  validation,
  handleChangeStep,
  handleChangePayload,
}: IFormProfileData) => {
  return (
    <div className="m-4">
      <Card className="overflow-x-hidden">
        <CardBody>
          <div className="w-full h-full flex flex-col gap-3.5 py-0.5 overflow-hidden">
            <div className="mb-2">
              <div className="text-xl font-bold italic text-secondary">
                Silahkan isi data diri kamu
              </div>
              <div className=" text-xs text-secondary">
                *Data ini harus diisi
              </div>
            </div>
            <FormLabel
              label="Nomor Identitas (KTP / SIM / Kartu Pelajar)*"
              labelPositionTop
              form={
                <TextInputIdentity
                  value={payload?.identity}
                  handleChangeIdentity={(value) =>
                    handleChangePayload?.("jenis_identitas", value)
                  }
                  handleChangeValue={(value) =>
                    handleChangePayload?.("no_identitas", value)
                  }
                  placeholder="Masukkan nomor identitas"
                />
              }
              errors={validation?.nama}
            />
            <FormLabel
              label="Nama*"
              labelPositionTop
              form={
                <Input
                  type="text"
                  placeholder="Masukkan nama"
                  radius="sm"
                  value={payload?.nama || ""}
                  onChange={(e) =>
                    handleChangePayload?.("nama", e.target.value)
                  }
                />
              }
              errors={validation?.nama}
            />
            <FormLabel
              label="Tanggal Lahir*"
              labelPositionTop
              form={
                <DatePicker
                  showMonthAndYearPickers
                  value={
                    payload?.tanggal_lahir
                      ? payload?.tanggal_lahir.toString()
                      : null
                  }
                  onChange={(value) => {
                    const formattedValue = value ? value.toString() : null;
                    handleChangePayload?.("tanggal_lahir", formattedValue);
                  }}
                />
              }
              errors={validation?.tanggal_lahir}
            />
            <FormLabel
              label="Alamat*"
              form={
                <Textarea
                  placeholder="Masukkan alamat"
                  radius="sm"
                  disableAutosize
                  classNames={{
                    input: "resize-y min-h-[60px]",
                  }}
                  value={payload?.alamat || ""}
                  onChange={(e) =>
                    handleChangePayload?.("alamat", e.target.value)
                  }
                  minRows={2}
                />
              }
              errors={validation?.alamat}
              labelPositionTop
            />
            <FormLabel
              label="Nomer Telepon*"
              form={
                <TextInputPhoneNumber
                  value={payload?.no_telepon || ""}
                  placeholder="Masukkan nomer telepon"
                  handleChange={(value) => {
                    handleChangePayload?.("no_telepon", value);
                  }}
                  handleChangeSelect={(value) =>
                    handleChangePayload?.("pengirim_kode_negara", value)
                  }
                />
              }
              errors={validation?.no_telepon}
              labelPositionTop
            />
            <FormLabel
              label="Email"
              form={
                <TextInputEmail
                  value={payload?.email || ""}
                  placeholder="Masukkan email"
                  handleChange={(value) => {
                    handleChangePayload?.("email", value);
                  }}
                />
              }
              errors={validation?.email}
              labelPositionTop
            />
            <Checkbox
              isSelected={payload?.is_agree}
              value={payload?.is_agree}
              onValueChange={(value) => {
                handleChangePayload?.("is_agree", value);
              }}
            >
              <p className="text-xs">
                Klik ini jika kamu telah setuju terhadap semua{" "}
                <span className="font-bold text-blue-700">
                  Syarat dan Ketentuan{" "}
                </span>
                kami
              </p>
            </Checkbox>
            {/* <div className="mb-52" /> */}
          </div>
        </CardBody>
      </Card>
      <div className="w-full mt-3 flex justify-end">
        <Button
          color="primary"
          variant="light"
          onPress={() => handleChangeStep("membership-type")}
        >
          <span className="text-sm font-semibold">Selanjutnya</span>
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default FormProfileData;
