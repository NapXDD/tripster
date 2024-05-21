import OverlayModal from "./overlayModal";
import ProfileEditForm from "../form/profileEditForm";

export default function EditProfileModal() {
  return (
    <OverlayModal title="Edit profile">
      <ProfileEditForm />
    </OverlayModal>
  );
}
