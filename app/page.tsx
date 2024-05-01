import SignInModal from "./components/Modal/signInModal";
import SignUpModal from "./components/Modal/signUpModal";
import Header from "./components/Header/header";
import OverLay, { Component } from "./components/overlay";
import { getUserSession } from "@/lib/session";

const components: Component = {
  signin: <SignInModal />,
  signup: <SignUpModal />,
  forgotpassword: <button>forgot password</button>,
  resetpassword: <button>reset password</button>,
};

export default async function Home() {
  const user = await getUserSession();
  return (
    <main className="bg-gray-100 w-[100vw] h-[100vh] flex">
      <Header user={user} />
      <OverLay Component={components} />
    </main>
  );
}
