"use client";

import { removeUser } from "@/lib/features/user";
import { useAppDispatch } from "@/lib/hooks";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSignOut = () => {
    dispatch(removeUser());
    signOut();
    router.push("/");
  };
  return <button onClick={handleSignOut}>Đăng xuất</button>;
}
