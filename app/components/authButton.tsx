"use client";

import { facebookLogo, googleLogo } from "@/utils/importer";
import Image from "next/image";

export function GoogleAuthButton() {
  return (
    <button
      className="bg-white text-gray-600 font-semibold
      px-4 py-2 rounded-md shadow-md transition duration-100 hover:bg-gray-100 focus:outline-none
      focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      lg: w-[300px]"
    >
      <div className="flex justify-center items-center gap-2">
        <Image
          src={googleLogo}
          alt="google logo"
          width={20}
          height={10}
          className="w-auto h-auto"
        />
        <span>Sign in with Google</span>
      </div>
    </button>
  );
}

export function FacebookAuthButton() {
  return (
    <button
      className="bg-blue-600 text-white font-semibold
       px-4 py-2 rounded-md shadow-md transition duration-100 hover:bg-blue-700 
       focus:outline-none focus:ring-2 focus:ring-blue-500 
       focus:ring-offset-2 lg: w-[300px]"
    >
      <div className="flex justify-center items-center gap-2">
        <Image
          src={facebookLogo}
          alt="facebook logo"
          width={20}
          height={10}
          className="w-auto h-auto"
        />
        <span>Sign in with Facebook</span>
      </div>
    </button>
  );
}
