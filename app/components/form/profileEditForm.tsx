"use client";

import { Input } from "antd";
import FormItem from "./overlayForm";
import { useAppSelector } from "@/lib/hooks";
import CustomButton from "../button/button";

export default function ProfileEditForm() {
  const currentUser = useAppSelector((state) => state.user.value.user);

  return (
    <div className="flex flex-col gap-3">
      <FormItem label="Username">
        <Input defaultValue={currentUser.username} />
      </FormItem>
      <CustomButton>Chỉnh sửa</CustomButton>
    </div>
  );
}
