"use client";

import {
  Card,
  CardBody,
  DatePicker,
  Textarea,
  Checkbox,
  Input,
} from "@nextui-org/react";
import { FormLabel } from "../common";
import {
  TextInputEmail,
  TextInputIdentity,
  TextInputPhoneNumber,
} from "@/components/atoms";
import { ICardFormRegister } from "@/types/components/molecule";

const CardFormRegister = ({
  data,
  validation,
  handleChangePayload,
}: ICardFormRegister) => {
  return (
    <Card className="overflow-x-hidden">
      <CardBody>
        <div className="w-full h-full flex flex-col gap-3.5 py-0.5 overflow-hidden">
          <div className="mb-2">
            <div className="text-xl font-semibold italic text-secondary">
              Silahkan isi data diri kamu
            </div>
            <div className=" text-xs text-secondary">*Data ini harus diisi</div>
          </div>
          <FormLabel
            label="Nomor Identitas (KTP / SIM / Kartu Pelajar)*"
            labelPositionTop
            form={
              <TextInputIdentity
                value={data?.identity}
                handleChangeIdentity={(value) =>
                  handleChangePayload?.("jenis_identitas", value)
                }
                handleChangeValue={(value) =>
                  handleChangePayload?.("no_identitas", value)
                }
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
                value={data?.nama || ""}
                onChange={(e) => handleChangePayload?.("nama", e.target.value)}
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
                  data?.tanggal_lahir ? data.tanggal_lahir.toString() : null
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
                value={data?.alamat || ""}
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
                value={data?.no_telepon || ""}
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
                value={data?.email || ""}
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
            isSelected={data?.is_agree}
            value={data?.is_agree}
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
  );
};

export default CardFormRegister;
