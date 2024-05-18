"use client";

import OpenOverlayButton from "./openOverlayButton";

export default function SignInButton() {
  return (
    <OpenOverlayButton
      text="Đăng nhập"
      modal="signin"
      type="theme"
      className="px-5 py-2"
    />
  );
}
