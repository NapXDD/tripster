"use client";

import { Input } from "antd";
import Button from "../button/button";
import FormItem from "./overlayForm";
import { useAppSelector } from "@/lib/hooks";

export default function ProfileEditForm() {
  const currentUser = useAppSelector((state) => state.user.value.user);

  return (
    <div className="flex flex-col gap-3">
      <FormItem label="Username">
        <Input defaultValue={currentUser.username} />
      </FormItem>
      <Button>Chỉnh sửa</Button>
    </div>
  );
}
