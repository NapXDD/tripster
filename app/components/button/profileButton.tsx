"use client";
import Image from "next/image";
import SignOutButton from "./signOutButton";
import { CurrentUser } from "@/lib/features/user";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">Account</a>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <SignOutButton />,
    key: "1",
  },
];

export default function ProfileButton({
  currentUser,
}: {
  currentUser: CurrentUser;
}) {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <button
        onClick={(e) => e.preventDefault()}
        className="flex border rounded-full justify-center items-center pr-3 pl-3 gap-2 shadow-md"
      >
        <MenuOutlined className="ml-3" />
        <Image
          className="m-3 rounded-full"
          src={currentUser.image}
          width={30}
          height={30}
          alt="user logo"
        />
      </button>
    </Dropdown>
  );
}
