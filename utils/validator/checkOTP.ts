import { RuleObject } from "antd/es/form";
import { numberRegex } from "../regex";

export default function checkOTP(_: RuleObject, otp: string) {
  if (otp === "" || otp === undefined) {
    return Promise.reject(new Error("OTP là cần thiết"));
  } else if (otp.length < 6) {
    return Promise.reject(new Error("Độ dài OTP phải là mã 6 số"));
  } else if (!numberRegex.test(otp) && otp.length === 6) {
    return Promise.reject(new Error("OTP phải là số"));
  } else {
    return Promise.resolve();
  }
}
