"use client";

import { Tag, TagSelection } from "@/app/types/tag/tag";
import SelectTagButton from "../../button/selectTagButton";
import { selectionObj } from "@/utils/reduxTagSelection";
import { useEffect, useState } from "react";
import { handleSelectFunc } from "@/app/types/tag/selection";
import FormItem from "../../form/createPlanningForm/FormItem";

export default function SelectTagInput({
  data,
  type,
  note,
}: {
  data: Tag[];
  type: TagSelection;
  note?: string;
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
    <FormItem label="Tiện ích, dịch vụ" note={note}>
      <div className="flex justify-center flex-wrap gap-2">
        {data.map((item, index) => (
          <SelectTagButton
            key={index + item.name}
            tag={item}
            handleFunc={handleFunc}
            type={type}
          />
        ))}
      </div>
    </FormItem>
  );
}
