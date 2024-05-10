"use client";

import { useAppDispatch } from "@/lib/hooks";
import { openOverLay } from "@/lib/features/overlay";
import { openModal } from "@/lib/features/modal";

export default function OpenOverlayButon({
  text,
  icon,
  modal,
}: {
  text: string;
  icon?: JSX.Element;
  modal: openModal;
}) {
  const dispatch = useAppDispatch();

  const handleOpenOverLay = () => {
    dispatch(openOverLay(true));
    dispatch(openModal(modal));
  };

  return (
    <button
      className="bgRed rounded-3xl p-2 min-w-[80px] text-white hover:bgRedHover"
      onClick={handleOpenOverLay}
    >
      <div className="flex gap-2 justify-center items-center">
        {icon} {text}
      </div>
    </button>
  );
}
