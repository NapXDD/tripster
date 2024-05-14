"use client";

import { RightOutlined } from "@ant-design/icons";
import { useEffect, useLayoutEffect, useState } from "react";

export default function RotateButton({
  handleVisible,
  open,
}: {
  handleVisible: (value: boolean) => void;
  open?: boolean;
}) {
  const [rotate, setRotate] = useState(open ? 90 : 0);

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
