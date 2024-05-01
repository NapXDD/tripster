"use client";
import { User } from "next-auth";
import SignInButton from "../button/signInButton";
import SignOutButton from "../button/signOutButton";
import SignUpButton from "../button/signUpButton";
import Logo from "./Logo";
import { useEffect } from "react";

export default function Header({ user }: { user: User }) {
  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  return (
    <div className="w-full flex h-20 shadow-sm justify-center">
      <div className="flex justify-between w-[80%] items-center">
        <Logo />
        <div className="flex gap-2">
          {user ? (
            <SignOutButton />
          ) : (
            <>
              <SignInButton />
              <SignUpButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
