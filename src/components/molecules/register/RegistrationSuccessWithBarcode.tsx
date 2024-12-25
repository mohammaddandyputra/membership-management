import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import QRCode from "react-qr-code";

const RegistrationSuccessWithBarcode = () => {
  return (
    <div className="min-h-screen flex flex-col mx-4">
      <div className="flex flex-col justify-center items-center gap-6 flex-grow">
        <p className="text-xl font-bold italic text-secondary text-center">
          Selamat! Kamu telah berhasil bergabung menjadi member kami
        </p>
        <div className="flex justify-center">
          <div className="p-5 inline-block bg-white rounded-lg border-4 border-gray-800">
            <QRCode
              size={215}
              style={{
                width: "215px",
                height: "215px",
                borderRadius: "8px",
              }}
              value={"572a392f-6600-43c2-944f-0f418fa52621"}
              fgColor="#000000"
              bgColor="#ffffff"
              level="H"
            />
          </div>
        </div>
        <p className="text-xl font-bold italic text-secondary text-center">
          Silahkan konfirmasikan ke kasir dan enjoy membership kamu!
        </p>
      </div>
      <div className="h-32 flex flex-col items-center gap-2 px-4">
        <Popover showArrow backdrop="blur" placement="top">
          <PopoverTrigger>
            <Button color="primary" variant="light" className="w-96">
              Untuk apa sih QR Code ini??
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-96">
            <div className="px-1 py-3">
              <p className="text-center font-semibold text-base">
                QR Code membership ini dapat kamu gunakan untuk mengakses
                fasilitas membership kamu lho. Cukup tunjukan QR Code ini ke
                kasir, dan kamu sudah dapat menikmati fasilitas membership kamu!
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Button color="primary" variant="solid" className="w-96">
          <span className="text-base font-bold italic">Unduh QR Code</span>
        </Button>
      </div>
    </div>
  );
};

export default RegistrationSuccessWithBarcode;
