"use client";

import { useAppDispatch } from "@/lib/hooks";
import { openOverLay } from "@/lib/features/overlay";
import { openModal } from "@/lib/features/modal";
import Button from "./button";
import { type } from "@/app/type/button";

export default function OpenOverlayButton({
  text,
  icon,
  modal,
  type,
  className,
}: {
  text: string;
  icon?: JSX.Element;
  modal: openModal;
  type?: type;
  className?: string;
}) {
  const dispatch = useAppDispatch();

  const handleOpenOverLay = () => {
    dispatch(openOverLay(true));
    dispatch(openModal(modal));
  };

  return (
    <Button type={type} className={className} onClick={handleOpenOverLay}>
      <div className="flex gap-2 justify-center items-center">
        {icon} {text}
      </div>
    </Button>
  );
}
