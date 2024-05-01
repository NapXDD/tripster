"use client";

const handleOpenSignInModal = () => {
  console.log("Sign in");
};

export default function SignInButton() {
  return <button onClick={handleOpenSignInModal}>Sign In</button>;
}
