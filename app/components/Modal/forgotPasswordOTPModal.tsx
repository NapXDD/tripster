import InputOTP from "../input/inputOTP";

export default function OTPModal() {
  return (
    <div className="flex flex-col">
      <div className="flex">Kiểm tra mã OTP trong mail của bạn</div>
      <InputOTP />
    </div>
  );
}
