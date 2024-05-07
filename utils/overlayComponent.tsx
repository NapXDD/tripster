import SignInModal from "@/app/components/Modal/signInModal";
import SignUpModal from "@/app/components/Modal/signUpModal";
import { Component } from "@/app/components/overlay";

export const components: Component = {
  signin: <SignInModal />,
  signup: <SignUpModal />,
  forgotpassword: <button>forgot password</button>,
  resetpassword: <button>reset password</button>,
};
