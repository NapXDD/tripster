"use client";

import { Tag, TagSelection } from "@/app/type/tag/tag";
import SelectTagButton from "../../button/selectTagButton";
import { selectionObj } from "@/utils/reduxTagSelection";
import { useEffect, useState } from "react";
import { handleSelectFunc } from "@/app/type/tag/selection";

export default function SelectTagInput({
  data,
  type,
}: {
  data: Tag[];
  type: TagSelection;
}) {
  const [handleFunc, setHandleFunc] = useState<handleSelectFunc>({
    setFunc: () => {},
    rmFunc: () => {},
  });

  useEffect(() => {
    selectionObj.forEach((obj) => {
      if (type === obj.value) {
        setHandleFunc(obj.handleFunc);
      }
    });
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      {data.map((item, index) => (
        <SelectTagButton
          key={index + item.title}
          tag={item}
          handleFunc={handleFunc}
          type={type}
        />
      ))}
    </div>
  );
}
