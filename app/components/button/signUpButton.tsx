"use client";

import { openModal } from "@/lib/features/modal";
import { openOverLay } from "@/lib/features/overlay";
import { useAppDispatch } from "@/lib/hooks";

export default function SignUpButton() {
  const dispatch = useAppDispatch();
  const handleOpenSignUpModal = () => {
    dispatch(openOverLay(true));
    dispatch(openModal("signup"));
  };
  return (
    <button
      className="border-2 rounded-full px-5 py-2"
      onClick={handleOpenSignUpModal}
    >
      Sign Up
    </button>
  );
}
