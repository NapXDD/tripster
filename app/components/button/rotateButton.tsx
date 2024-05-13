"use client";

import { RightOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function RotateButton({
  handleVisible,
}: {
  handleVisible: (value: boolean) => void;
}) {
  const [rotate, setRotate] = useState(0);

  const handleRotate = () => {
    if (rotate === 0) {
      setRotate(90);
      handleVisible(true);
    } else {
      setRotate(0);
      handleVisible(false);
    }
  };

  return (
    <button onClick={handleRotate}>
      <RightOutlined rotate={rotate} />
    </button>
  );
}
