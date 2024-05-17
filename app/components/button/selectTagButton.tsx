"use client";
import { Tag, TagSelection } from "@/app/type/tag/tag";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

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
  const tags = useAppSelector((state) => state.createPlanning.value[type]);
  const [isSelect, setIsSelect] = useState(tags.includes(tag.value));
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

  useEffect(() => {
    setIsSelect(tags.includes(tag.value));
  }, [tags]);

  return (
    <button
      type="button"
      className={`${
        isSelect ? "bg-gray-400" : "bg-white"
      } rounded-full border p-2 min-w-[80px]`}
      onClick={() => handleSelect(tag.value)}
    >
      {tag.title}
    </button>
  );
}
