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
  return <button onClick={handleOpenSignUpModal}>Sign Up</button>;
}
