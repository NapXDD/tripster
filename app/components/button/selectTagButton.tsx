"use client";
import { Tag, TagSelection } from "@/app/types/tag/tag";
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
  const [isSelect, setIsSelect] = useState(
    //check if tags contain tag
    !!tags.filter((item) => item.id === tag.id)[0]
  );
  const dispatch = useAppDispatch();

  const handleSelect = (value: Tag) => {
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
    setIsSelect(!!tags.filter((item) => item.id === tag.id)[0]);
  }, [tags]);

  return (
    <button
      type="button"
      className={`${
        isSelect ? "bg-gray-400" : "bg-white"
      } rounded-full border p-2 min-w-[80px]`}
      onClick={() => handleSelect(tag)}
    >
      {tag.name}
    </button>
  );
}
