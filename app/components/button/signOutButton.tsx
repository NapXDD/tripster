"use client";

import { removeUser } from "@/lib/features/user";
import { useAppDispatch } from "@/lib/hooks";
import { BASE_URL } from "@/utils/importer";
import { signOut } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export default function SignOutButton() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  console.log(BASE_URL);

  const handleSignOut = () => {
    dispatch(removeUser());
    signOut();
    redirect("/");
  };
  return <button onClick={handleSignOut}>Đăng xuất</button>;
}
