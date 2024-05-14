"use client";

import React, { useState } from "react";
import RotateButton from "../../button/rotateButton";

export default function ListLayout({
  id,
  children,
  title,
}: {
  id: string;
  children?: React.ReactNode;
  title: string;
}) {
  const [visible, setVisible] = useState(false);

  const handleVisible = (value: boolean) => {
    setVisible(value);
  };

  return (
    <div className="flex flex-col title mb-10">
      <div className="flex gap-2">
        <RotateButton handleVisible={handleVisible} />
        <a href={`#${id.toLocaleLowerCase()}`}>{title}</a>
      </div>
      {visible ? (
        <div className="ml-[calc(16px+0.5rem)]">{children}</div>
      ) : (
        <></>
      )}
    </div>
  );
}
