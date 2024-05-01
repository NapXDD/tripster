"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  const handleSignOut = () => {
    signOut();
  };
  return <button onClick={handleSignOut}>Sign out</button>;
}
