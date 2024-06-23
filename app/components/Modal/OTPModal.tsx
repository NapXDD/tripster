"use client";

import { Form, FormProps } from "antd";
import { InputOTP } from "../input/inputOTP";
import checkOTP from "@/utils/validator/checkOTP";
import Button from "../button/button";
import { verifyOTP } from "@/utils/api/authenticate";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setEmail } from "@/lib/features/authenticate";
import { toast } from "react-toastify";
import { openOverLay } from "@/lib/features/overlay";
import OverlayModal from "./overlayModal";

interface FieldType {
  otp: string;
}

export default function OTPModal() {
  const email = useAppSelector((state) => state.authenticate.value.email);
  const dispatch = useAppDispatch();

  const handleSubmit: FormProps<FieldType>["onFinish"] = async (value) => {
    const resposne = await verifyOTP({ email: email, otp: value.otp });
    if (resposne.status === "200") {
      //cleaning after verifyOTP
      dispatch(setEmail(""));
      toast.success("Hoàn thành xác nhận");
      dispatch(openOverLay(false));
    }
  };

  return (
    <OverlayModal title="Xác nhận OTP">
      <div className="font-semibold">
        Một mã OTP đã được gửi đến mail của bạn
      </div>
      <Form onFinish={handleSubmit}>
        <Form.Item label="OTP" name="otp" rules={[{ validator: checkOTP }]}>
          <InputOTP />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-end">
            <Button type="theme" htmlType="submit">
              Gửi
            </Button>
          </div>
        </Form.Item>
      </Form>
    </OverlayModal>
  );
}
