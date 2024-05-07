"use client";

import { removeUser } from "@/lib/features/user";
import { useAppDispatch } from "@/lib/hooks";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SignOutButton() {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(removeUser());
    signOut();
    redirect("/");
  };
  return <button onClick={handleSignOut}>Sign out</button>;
}
