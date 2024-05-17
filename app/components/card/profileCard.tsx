"use client";

import { useAppSelector } from "@/lib/hooks";
import { avatar } from "@/utils/importer";
import Image from "next/image";
import OpenOverlayButon from "../button/openOverlayButton";
import { EditOutlined } from "@ant-design/icons";

export default function ProfileCard({ userId }: { userId: string }) {
  const currentUser = useAppSelector((state) => state.user.value.user);

  return (
    <div className="flex flex-col w-[50%] p-3 items-center lg:w-[20%] gap-2">
      <div className="flex flex-col justify-center items-center p-4 gap-2 border rounded-lg">
        <div className="flex aspect-square overflow-hidden rounded-full justify-center m-2">
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
        {currentUser.id === userId ? (
          <OpenOverlayButon
            text="Chỉnh sửa"
            icon={<EditOutlined />}
            modal="editprofile"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
