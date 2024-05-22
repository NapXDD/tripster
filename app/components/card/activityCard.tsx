"use client";

import { useState } from "react";
import RotateButton from "../button/rotateButton";

export default function ActivityCard({
  content,
  date,
  keyId,
}: {
  content: JSX.Element;
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
      {visible ? <div>{content}</div> : <></>}
    </div>
  );
}
