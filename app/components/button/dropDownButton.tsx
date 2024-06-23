"use client";

import { useAppSelector } from "@/lib/hooks";
import { deletePlan } from "@/utils/api/plan";
import { EllipsisOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function DropDownButton({
  className,
  id,
}: {
  className?: string;
  id: string;
}) {
  const currentUser = useAppSelector((state) => state.user.value.user);
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await deletePlan(
        { idPlan: id.split("-")[0] },
        currentUser.token
      );
      if (res.status === "200") {
        toast.success("Xóa thành công");
        router.refresh();
      }
    } catch (e) {
      throw e;
    }
  };

  const items: MenuProps["items"] = [
    {
      label: <Link href={`/planningDetail/${id}`}>Xem</Link>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <button onClick={handleDelete}>Xóa</button>,
      key: "1",
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
      <button
        onClick={(e) => e.preventDefault()}
        className={`flex justify-center items-center text-white w-5 h-5  rounded-full bg-black bg-opacity-50 ${className}`}
      >
        <EllipsisOutlined />
      </button>
    </Dropdown>
  );
}
