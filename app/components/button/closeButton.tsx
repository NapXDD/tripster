"use client";

import { openOverLay } from "@/lib/features/overlay";
import { useAppDispatch } from "@/lib/hooks";
import { CloseOutlined } from "@ant-design/icons";

export default function CloseButton() {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(openOverLay(false));
  };

  return (
    <button
      className="flex justify-center items-center rounded-full w-8 h-8 bg-gray-200 transition duration-100 hover:bg-gray-300"
      onClick={handleClose}
    >
      <CloseOutlined />
    </button>
  );
}
