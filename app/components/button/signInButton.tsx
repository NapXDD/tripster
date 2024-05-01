"use client";

import { openModal } from "@/lib/features/modal";
import { openOverLay } from "@/lib/features/overlay";
import { useAppDispatch } from "@/lib/hooks";

export default function SignInButton() {
  const dispatch = useAppDispatch();
  const handleOpenSignInModal = () => {
    dispatch(openOverLay(true));
    dispatch(openModal("signin"));
  };
  return <button onClick={handleOpenSignInModal}>Sign In</button>;
}
