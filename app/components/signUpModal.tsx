import { FacebookAuthButton, GoogleAuthButton } from "./authButton";
import CloseButton from "./closeButton";
import CredentialButton from "./credentialButton";

export default function SignUpModal() {
  return (
    <div className="bg-white rounded-xl w-full lg:w-auto">
      <div className="flex m-2 justify-end">
        <CloseButton />
      </div>
      <div className="mb-14 ml-14 mr-14 mt-8 flex flex-col gap-2 justify-center items-center">
        <span className="mb-5 text-lg font-bold">Sign up to Tripster</span>
        <GoogleAuthButton />
        <FacebookAuthButton />
        <div className="flex items-center justify-between w-full mt-4 mb-4">
          <div className="bg-gray-300 w-full h-[1px] mr-5"></div>
          <div>or</div>
          <div className="bg-gray-300 w-full h-[1px] ml-5"></div>
        </div>
        <CredentialButton type="signup" />
      </div>
    </div>
  );
}
