"use client";

import { openModal } from "@/lib/features/modal";
import { openOverLay } from "@/lib/features/overlay";
import { useAppDispatch } from "@/lib/hooks";
import Button from "./button";

export default function SignInButton() {
  const dispatch = useAppDispatch();
  const handleOpenSignInModal = () => {
    dispatch(openOverLay(true));
    dispatch(openModal("signin"));
  };
  return (
    <Button className="px-5 py-2" onClick={handleOpenSignInModal}>
      Đăng nhập
    </Button>
  );
}
