"use client";
import { User } from "next-auth";
import Logo from "./Logo";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setUser } from "@/lib/features/user";
import ProfileButton from "../button/profileButton";
import OpenOverlayButton from "../button/openOverlayButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { testData } from "@/utils/importer";
import { setupPlan } from "@/utils/function/setupPlan";

export default function Header({ user }: { user?: User }) {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.value.user);
  const { data: session, status, update } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user]);

  useEffect(() => {
    if (session) {
      dispatch(setUser(session.user));
    }
  }, [session]);

  useEffect(() => {
    // TIP: You can also use `navigator.onLine` and some extra event handlers
    // to check if the user is online and only update the session if they are.
    // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine
    const interval = setInterval(() => update(), 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, [update]);

  useEffect(() => {
    setupPlan(testData);
  }, []);

  // Listen for when the page is visible, if the user switches tabs
  // and makes our tab visible again, re-fetch the session
  useEffect(() => {
    const visibilityHandler = () =>
      document.visibilityState === "visible" && update();
    window.addEventListener("visibilitychange", visibilityHandler, false);
    return () =>
      window.removeEventListener("visibilitychange", visibilityHandler, false);
  }, [update]);

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
