import ChangePasswordForm from "../form/changePasswordForm";
import OverlayModal from "./overlayModal";

export default function ChangePasswordModal() {
  return (
    <OverlayModal title="Đổi mật khẩu">
      <div className="flex justify-center items-center min-w-[200px]">
        <ChangePasswordForm />
      </div>
    </OverlayModal>
  );
}
