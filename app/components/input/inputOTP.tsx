"use client";

import { GetProp, Input } from "antd";
import { OTPProps } from "antd/es/input/OTP";

export default function InputOTP() {
  const onChange: GetProp<typeof Input.OTP, "onChange"> = (text) => {
    console.log("onChange:", text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };
  return <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />;
}
