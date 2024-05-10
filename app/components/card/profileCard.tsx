"use client";

import { useAppSelector } from "@/lib/hooks";
import { avatar } from "@/utils/importer";
import { current } from "@reduxjs/toolkit";
import Image from "next/image";

export default function ProfileCard({ userId }: { userId: string }) {
  const currentUser = useAppSelector((state) => state.user.value.user);

  return (
    <div className="flex flex-col w-[50%] border p-3 rounded-lg items-center lg:w-[20%] gap-2">
      <div className="flex aspect-square overflow-hidden rounded-full justify-center">
        <Image
          src={avatar}
          alt="avatar"
          width={200}
          height={200}
          style={{ width: "100%", objectFit: "cover", maxWidth: "none" }}
        />
      </div>
      <div className="font-bold">{currentUser.username}</div>
      <div>{currentUser.email}</div>
    </div>
  );
}
