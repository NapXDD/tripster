import { FacebookAuthButton, GoogleAuthButton } from "../button/authButton";
import SignUpForm from "../form/signUpForm";
import OverlayModal from "./overlayModal";

export default function SignUpModal() {
  return (
    <OverlayModal>
      <span className="mb-5 text-lg font-bold">Sign up to Tripster</span>
      {/* <GoogleAuthButton />
      <FacebookAuthButton />
      <div className="flex items-center justify-between w-full mt-4 mb-4">
        <div className="bg-gray-300 w-full h-[1px] mr-5"></div>
        <div>or</div>
        <div className="bg-gray-300 w-full h-[1px] ml-5"></div>
      </div> */}
      <SignUpForm />
    </OverlayModal>
  );
}
