"use client";

import { useState } from "react";
import RotateButton from "../button/rotateButton";

export default function ActivityCard({
  content,
  date,
  keyId,
}: {
  content: string | React.ReactNode;
  date: string;
  keyId: string;
}) {
  const [visible, setVisible] = useState(true);

  const handleSetVisible = (value: boolean) => {
    setVisible(value);
  };

  return (
    <div id={`itinerary${keyId}`} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <RotateButton handleVisible={handleSetVisible} open />
        <div className="title">{date}</div>
      </div>
      {visible ? (
        <div className="ml-[calc(16px+0.5rem)]">{content}</div>
      ) : (
        <></>
      )}
    </div>
  );
}
