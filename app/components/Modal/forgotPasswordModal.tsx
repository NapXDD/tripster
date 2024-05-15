import OverlayModal from "./overlayModal";
import ForgotPasswordForm from "../form/forgotPasswordForm";

export default function ForgotPasswordModal() {
  return (
    <OverlayModal title="Quên mật khẩu">
      <div className="flex justify-center items-center min-w-[200px]">
        <ForgotPasswordForm />
      </div>
    </OverlayModal>
  );
}
