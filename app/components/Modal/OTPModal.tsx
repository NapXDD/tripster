import InputOTP from "../input/inputOTP";

export default function OTPModal({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      {children}
      <InputOTP />
    </div>
  );
}
