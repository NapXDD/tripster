"use client";

import { GetProp, Input } from "antd";
import { useRef, useState } from "react";

interface PriceInputProps {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const InputOTP: React.FC<PriceInputProps> = (props) => {
  const { onChange } = props;
  const [_, setOTP] = useState("");
  const otpRef = useRef<HTMLDivElement>(null);

  const triggerChange = (changedValue: string) => {
    onChange?.(changedValue);
  };

  const onOTPChange: GetProp<typeof Input.OTP, "onKeyUp"> = () => {
    const otpElement = otpRef?.current;
    let currentOTP = "";
    if (otpElement) {
      const childrenElement = otpElement.children[0].children;
      const inputElement: HTMLInputElement[] = [];
      for (let key in childrenElement) {
        if (typeof childrenElement[key] === "object") {
          inputElement.push(
            childrenElement[key] as unknown as HTMLInputElement
          );
        }
      }
      inputElement.forEach((item) => {
        if (item.value !== "") {
          currentOTP = `${currentOTP}${item.value}`;
        }
      });
    }
    setOTP(currentOTP);
    triggerChange(currentOTP);
  };

  return (
    <div ref={otpRef}>
      <Input.OTP onKeyUp={onOTPChange} />
    </div>
  );
};
