import { sign } from "crypto";
import SignInModal from "./components/Modal/signInModal";
import SignUpModal from "./components/Modal/signUpModal";
import Header from "./components/header";
import OverLay, { Component } from "./components/overlay";

const components: Component = {
  signin: <SignInModal />,
  signup: <SignUpModal />,
  forgotpassword: <button>forgot password</button>,
  resetpassword: <button>reset password</button>,
};

export default async function Home() {
  return (
    <main className="bg-gray-100 w-[100vw] h-[100vh] flex">
      <Header />
      <OverLay Component={components} />
    </main>
  );
}
