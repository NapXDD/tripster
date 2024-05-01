"use client";

import { CloseOutlined } from "@ant-design/icons";

const handleClose = () => {
  console.log("close button");
};

export default function CloseButton() {
  return (
    <button
      className="flex justify-center items-center rounded-full w-8 h-8 bg-gray-200 transition duration-100 hover:bg-gray-300"
      onClick={handleClose}
    >
      <CloseOutlined />
    </button>
  );
}
