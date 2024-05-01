"use client";

import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

type modal = "signin" | "signup" | "resetpassword" | "forgotpassword" | string;
export type Component = Record<modal, JSX.Element>;

export default function OverLay({ Component }: { Component: Component }) {
  const isOverLayOpen = useAppSelector((state) => state.overlay.value);
  const modal = useAppSelector((state) => state.modal.value);
  const [keyModal, setKeyModal] = useState("");

  useEffect(() => {
    let keyModal = "";
    for (let key in modal) {
      if (modal[key] === true) {
        keyModal = key;
      }
    }
    setKeyModal(keyModal.toLocaleLowerCase());
  }, [modal]);

  return (
    <div
      className={`transition duration-100 bg-black bg-opacity-50 ${
        isOverLayOpen === true ? `` : `opacity-0 pointer-events-none`
      } fixed w-[100vw] h-[100vh] flex justify-center items-center`}
    >
      {Component[keyModal]}
    </div>
  );
}
