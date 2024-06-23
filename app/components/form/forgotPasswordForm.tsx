"use client";

import { Button as ButtonAntd, Form, Input, InputProps, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { openModal } from "@/lib/features/modal";
import Button from "../button/button";
import checkOTP from "@/utils/validator/checkOTP";
import { InputOTP } from "../input/inputOTP";
import { toast } from "react-toastify";
import { generateOTP } from "@/utils/api/authenticate";
import { error } from "@/utils/entities/response";
import { emailRegex } from "@/utils/function/regex";

export default function ForgotPasswordForm() {
  const [send, setSend] = useState<string | number>("Gửi OTP");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();

  const handleWriteEmail: InputProps["onChange"] = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    dispatch(openModal("changepassword"));
  };

  const handleGetOTP = async () => {
    setIsLoading(true);
    setSend(300);
    try {
      //handle get otp here
      const response = await generateOTP({ email: email });
      if (response?.status === "200") {
        toast.success("Đã gửi một OTP đến mail của bạn");
      }
    } catch (e) {
      const error = e as error;
      toast.error(error.message);
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

  return (
    <Form
      className="w-full"
      autoComplete="off"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={handleSubmit}
    >
      <Form.Item
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
        label="OTP"
        name="otp"
        required
        rules={[{ validator: checkOTP }]}
      >
        <InputOTP />
      </Form.Item>
      <Form.Item className="flex justify-end">
        <Button type="theme" htmlType="submit">
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
}
