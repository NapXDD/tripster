"use client";
import { Tag, TagSelection } from "@/app/type/tag";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";

export default function SelectTagButton({
  tag,
  handleFunc,
  type,
}: {
  tag: Tag;
  handleFunc: {
    setFunc: Function;
    rmFunc: Function;
  };
  type: TagSelection;
}) {
  const [isSelect, setIsSelect] = useState(false);
  const tags = useAppSelector((state) => state.planning.value[type]);
  const dispatch = useAppDispatch();

  const handleSelect = (value: string) => {
    if (isSelect === false) {
      if (tags.length < 5) {
        setIsSelect(true);
        dispatch(handleFunc.setFunc(value));
      }
    } else {
      setIsSelect(false);
      dispatch(handleFunc.rmFunc(value));
    }
  };

  return (
    <button
      className={isSelect ? "bg-gray-400" : ""}
      onClick={() => handleSelect(tag.value)}
    >
      {tag.title}
    </button>
  );
}
