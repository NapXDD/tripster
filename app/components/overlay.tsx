"use client";

let popUp = true;

type modal = "signin" | "signup" | "resetpassword" | "forgotpassword";
export type Component = Record<modal, JSX.Element>;

export default function OverLay({ Component }: { Component: Component }) {
  return (
    <div
      className={`transition duration-100 bg-black bg-opacity-50 ${
        popUp === true ? `` : `opacity-0 pointer-events-none`
      } fixed w-[100vw] h-[100vh] flex justify-center items-center`}
    >
      {Component.signin}
    </div>
  );
}
