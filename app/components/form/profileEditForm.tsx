"use client";

import { Input } from "antd";
import FormItem from "./overlayForm";
import { useAppSelector } from "@/lib/hooks";
import Button from "../button/button";

export default function ProfileEditForm() {
  const currentUser = useAppSelector((state) => state.user.value.user);

  return (
    <div className="flex flex-col gap-3">
      <FormItem label="Username">
        <Input defaultValue={currentUser.username} />
      </FormItem>
      <div className="flex justify-end">
        <Button className="px-4 py-2" type="theme">
          Chỉnh sửa
        </Button>
      </div>
    </div>
  );
}
