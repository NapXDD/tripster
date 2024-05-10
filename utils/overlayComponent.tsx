import EditProfileModal from "@/app/components/Modal/editProfileModal";
import ForgotPasswordModal from "@/app/components/Modal/forgotPasswordModal";
import SignInModal from "@/app/components/Modal/signInModal";
import SignUpModal from "@/app/components/Modal/signUpModal";
import { OverlayComponent } from "@/app/components/overlay";

export const components: OverlayComponent = {
  signin: <SignInModal />,
  signup: <SignUpModal />,
  editprofile: <EditProfileModal />,
  forgotpassword: <ForgotPasswordModal />,
  resetpassword: <button>reset password</button>,
};
