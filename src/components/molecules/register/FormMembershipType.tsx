"use client";

import {
  Card,
  CardBody,
  Button,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { IFormMembershipList } from "@/types/components/molecule";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

const FormMembershipType = ({
  data,
  payload,
  validation,
  handleChangeStep,
  handleChangePayload,
  handleSubmit,
}: IFormMembershipList) => {
  const [selectedKeys, setSelectedKeys] = useState([""]);

  const getCurrentKeyFromSet = (keySetOrArray) => {
    if (keySetOrArray instanceof Set) {
      const currentKey = Array.from(keySetOrArray)[0] || null;
      setSelectedKeys([currentKey]);
    } else if (Array.isArray(keySetOrArray)) {
      setSelectedKeys(keySetOrArray);
    } else {
      console.error("Invalid data type, expected Set or Array");
    }
  };

  return (
    <div className="m-4">
      <Card className="overflow-x-hidden">
        <CardBody>
          <div className="w-full h-full flex flex-col gap-4 py-0.5 overflow-hidden">
            <div className="mb-2">
              <p className="text-xl font-bold italic text-secondary">
                Pilih Jenis Membershipmu
              </p>
              <p className=" text-xs text-secondary">
                Silahkan pilih jenis membership yang sesuai dengan kamu
              </p>
            </div>
            <div>
              <Accordion
                variant="splitted"
                onSelectionChange={getCurrentKeyFromSet}
              >
                {data?.length
                  ? data?.map((membershipList, index) => {
                      return (
                        <AccordionItem
                          key={index}
                          title={membershipList?.title}
                          classNames={
                            selectedKeys?.length
                              ? parseInt(selectedKeys[0]) === index
                                ? {
                                    title: "text-white",
                                    indicator: "text-white",
                                  }
                                : undefined
                              : undefined
                          }
                          className={
                            selectedKeys?.length
                              ? parseInt(selectedKeys[0]) === index
                                ? "bg-secondary text-white text-sm font-medium"
                                : ""
                              : ""
                          }
                        >
                          <div
                            className={
                              selectedKeys?.length
                                ? parseInt(selectedKeys[0]) === index
                                  ? "text-white pb-2"
                                  : ""
                                : ""
                            }
                          >
                            {membershipList?.description}
                          </div>
                        </AccordionItem>
                      );
                    })
                  : null}
              </Accordion>
            </div>
            <Button color="primary" variant="solid" onPress={handleSubmit}>
              <span className="text-base font-bold italic">
                Daftar Membership
              </span>
            </Button>
          </div>
        </CardBody>
      </Card>
      <div className="mt-3">
        <Button
          color="primary"
          variant="light"
          onPress={() => handleChangeStep("profile-data")}
        >
          <ChevronLeft size={20} />
          <span className="text-sm font-semibold">Kembali</span>
        </Button>
      </div>
    </div>
  );
};

export default FormMembershipType;
