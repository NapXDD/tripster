"use client";

import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import OpenOverlayButton from "../button/openOverlayButton";
import { EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { error } from "@/utils/entities/response";
import { getUserInfo } from "@/utils/api/user";
import { UserInfoEntities } from "@/utils/entities/user";

export default function ProfileCard({ userId }: { userId: string }) {
  const currentUser = useAppSelector((state) => state.user.value.user);
  const [user, setUser] = useState<UserInfoEntities | null>(null);

  const getUser = async (id: string) => {
    try {
      const res = await getUserInfo(id, currentUser.token);
      if (res.status === "200") {
        setUser(res.messageData);
      }
    } catch (e) {
      const error = e as error;
      throw error;
    }
  };

  useEffect(() => {
    if (currentUser.id !== userId) {
      getUser(userId);
    }
  }, [userId]);

  return (
    <div className="flex flex-col w-full p-3 items-center lg:w-[20%] gap-2 ">
      <div className="flex flex-col justify-center items-center p-4 gap-2 border rounded-lg ">
        <div className="flex aspect-square overflow-hidden rounded-full justify-center m-2 ">
          <Image
            src={user !== null ? user.avatar : currentUser.image}
            alt="avatar"
            width={200}
            height={200}
            style={{ width: "100%", objectFit: "cover", maxWidth: "none" }}
          />
        </div>
        <div className="font-bold">
          {user !== null ? user.fullname : currentUser.name}
        </div>
        <div>{user !== null ? user.email : currentUser.email}</div>
        {currentUser.id.toString() === userId ? (
          <OpenOverlayButton
            text="Chỉnh sửa"
            icon={<EditOutlined />}
            modal="editprofile"
            type="theme"
            className="px-4 py-2"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
