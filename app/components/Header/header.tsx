"use client";
import { User } from "next-auth";
import Logo from "./Logo";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setUser } from "@/lib/features/user";
import ProfileButton from "../button/profileButton";
import OpenOverlayButton from "../button/openOverlayButton";

export default function Header({ user }: { user: User }) {
  console.log(user);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.value.user);

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user]);

  return (
    <div className="w-full flex h-20 shadow-sm justify-center">
      <div className="flex justify-between w-[80%] items-center">
        <Logo />
        <div className="flex gap-2">
          {currentUser.email !== "" ? (
            <ProfileButton currentUser={currentUser} />
          ) : (
            <>
              <OpenOverlayButton
                text="Đăng nhập"
                modal="signin"
                type="theme"
                className="px-5 py-2"
              />
              <OpenOverlayButton
                text="Đăng ký"
                modal="signup"
                className="px-5 py-2"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
