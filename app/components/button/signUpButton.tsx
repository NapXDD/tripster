"use client";

const handleOpenSignUpModal = () => {
  console.log("Sign up");
};

export default function SignUpButton() {
  return <button onClick={handleOpenSignUpModal}>Sign Up</button>;
}
