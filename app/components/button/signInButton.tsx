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
  return (
    <button
      className="bgRed text-white hover:bgRedHover rounded-full px-5 py-2"
      onClick={handleOpenSignInModal}
    >
      Sign In
    </button>
  );
}
