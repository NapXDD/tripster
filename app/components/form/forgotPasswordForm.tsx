"use client";

import { emailRegex, numberRegex } from "@/utils/regex";
import { Button, Form, GetProp, Input, InputProps, Space } from "antd";
import { useEffect, useState } from "react";
import ErrorHelperText from "../input/errorHelperText";
import { useAppDispatch } from "@/lib/hooks";
import { openModal } from "@/lib/features/modal";

type FieldType = {
  email: string;
};

export default function ForgotPasswordForm() {
  const [send, setSend] = useState<string | number>("Gửi OTP");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState<null | string>(null);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const handleWriteEmail: InputProps["onChange"] = (event) => {
    setEmail(event.target.value);
  };

  const otpCustomRule = (otp: string) => {
    if (otp === "") {
      setVisible(true);
      setError("Nhập OTP là cần thiết");
    } else if (otp.length < 6) {
      setVisible(true);
      setError("Độ dài OTP phải là mã 6 số");
    } else if (!numberRegex.test(otp) && otp.length === 6) {
      setVisible(true);
      setError("OTP phải là số");
    } else {
      setVisible(false);
    }
  };

  const handleOTP: GetProp<typeof Input.OTP, "onChange"> = (text) => {
    setOTP(text);
  };

  const handleSubmitError = () => {
    if (otp === null) {
      setOTP("");
    }
  };

  const handleSubmit = () => {
    //check otp first time send
    if (otp === null) {
      setOTP("");
    } else {
      //if the otp have no error
      if (visible === false) {
        //do submit code here
        dispatch(openModal("changepassword"));
      }
    }
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
  useEffect(() => {
    if (otp !== null) {
      otpCustomRule(otp);
    }
  }, [otp]);

  return (
    <Form
      className="w-full"
      autoComplete="off"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={handleSubmit}
      onFinishFailed={handleSubmitError}
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
          <Button
            disabled={isDisable}
            loading={isLoading}
            onClick={handleGetOTP}
          >
            {send}
          </Button>
        </Space.Compact>
      </Form.Item>
      <Form.Item style={{ marginBottom: "1.25rem" }} label="OTP" required>
        <Input.OTP style={{ width: "100%" }} onChange={handleOTP} />
        {visible && <ErrorHelperText>{error}</ErrorHelperText>}
      </Form.Item>
      <Form.Item className="flex justify-end">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
