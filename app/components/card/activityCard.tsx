"use client";

import { useState } from "react";
import RotateButton from "../button/rotateButton";

export default function ActivityCard({
  content,
}: {
  content: string | React.ReactNode;
}) {
  const [visible, setVisible] = useState(true);

  const handleSetVisible = (value: boolean) => {
    setVisible(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <RotateButton handleVisible={handleSetVisible} open />
        <div className="title">Date-time</div>
      </div>
      {visible ? (
        <div className="ml-[calc(16px+0.5rem)]">{content}</div>
      ) : (
        <></>
      )}
    </div>
  );
}
