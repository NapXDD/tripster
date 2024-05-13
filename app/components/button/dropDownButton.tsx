import { EllipsisOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import Link from "next/link";

export default function DropDownButton({
  className,
  id,
}: {
  className?: string;
  id: string;
}) {
  const items: MenuProps["items"] = [
    {
      label: <Link href={`/planningDetail/${id}`}>View</Link>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: "Delete",
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
