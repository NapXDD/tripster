"use client";

import { openModal } from "@/lib/features/modal";
import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

export type OverlayComponent = Record<openModal, JSX.Element>;

export default function OverLay({
  Component,
}: {
  Component: OverlayComponent;
}) {
  const isOverLayOpen = useAppSelector((state) => state.overlay.value);
  const modal = useAppSelector((state) => state.modal.value);
  const [keyModal, setKeyModal] = useState<openModal>("changepassword");

  useEffect(() => {
    let keyModal: openModal = "changepassword";
    for (let key in modal) {
      const modalKey = key as openModal;
      if (modal[modalKey] === true) {
        keyModal = modalKey;
      }
    }
    setKeyModal(keyModal);
  }, [modal]);

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      if (isOverLayOpen) {
        htmlElement.style.overflow = "hidden";
      } else {
        htmlElement.style.overflow = "";
      }
    }
  }, [isOverLayOpen]);

  return (
    <div
      className={`transition duration-100 bg-black bg-opacity-50 ${
        isOverLayOpen === true ? `` : `opacity-0 pointer-events-none`
      } fixed z-[99] w-[100%] h-[100vh] flex justify-center items-center`}
    >
      {Component[keyModal]}
    </div>
  );
}
