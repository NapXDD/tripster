"use client";

import { emailRegex, numberRegex } from "@/utils/regex";
import {
  Button as ButtonAntd,
  Form,
  GetProp,
  Input,
  InputProps,
  Space,
} from "antd";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { openModal } from "@/lib/features/modal";
import Button from "../button/button";
import checkOTP from "@/utils/validator/checkOTP";

type FieldType = {
  email: string;
};

export default function ForgotPasswordForm() {
  const [send, setSend] = useState<string | number>("Gửi OTP");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState<string>("");
  const [nodeList, setNodeList] = useState<NodeListOf<HTMLInputElement>>();
  const dispatch = useAppDispatch();

  const handleWriteEmail: InputProps["onChange"] = (event) => {
    setEmail(event.target.value);
  };

  const handleOTP: GetProp<typeof Input.OTP, "onKeyDown"> = (e) => {
    const otpElement = document.querySelector("#otp ");
    const inputElement = otpElement?.querySelectorAll("input");
    console.log(inputElement);
  };

  const handleSubmit = () => {
    dispatch(openModal("changepassword"));
  };

  const handleGetOTP = async () => {
    setIsLoading(true);
    setSend(300);
    try {
      //handle get otp here
    } catch (e) {
      console.log(e);
    }
    setTimeout(() => setIsLoading(false), 3000);
  };

  //send otp button side effect
  useEffect(() => {
    if (emailRegex.test(email) === false) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [email]);

  //custom helper text behavior
  // useEffect(() => {
  //   if (otp !== null) {
  //     otpCustomRule(otp);
  //   }
  // }, [otp]);

  return (
    <Form
      className="w-full"
      autoComplete="off"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={handleSubmit}
    >
      <Form.Item<FieldType>
        label="Email"
        style={{ marginBottom: "1.25rem" }}
        name="email"
        rules={[
          { required: true, message: "Email là cần thiết" },
          { type: "email", message: "Định dạng email không đúng" },
        ]}
      >
        <Space.Compact style={{ width: "100%" }}>
          <Input onChange={handleWriteEmail} placeholder="Email" />
          <ButtonAntd
            disabled={isDisable}
            loading={isLoading}
            onClick={handleGetOTP}
          >
            {send}
          </ButtonAntd>
        </Space.Compact>
      </Form.Item>
      <Form.Item
        style={{ marginBottom: "1.25rem" }}
        label="OTP"
        name="otp"
        required
        rules={[{ validator: () => checkOTP(otp) }]}
      >
        <Input.OTP style={{ width: "100%" }} onKeyDown={handleOTP} />
      </Form.Item>
      <Form.Item className="flex justify-end">
        <Button type="theme" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
