"use client";
import { DatePicker } from "antd";
import "./css/rangePickerCustom.css";
import { useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

const { RangePicker } = DatePicker;

export default function TimeInput() {
  const isOverLayOpen = useAppSelector((state) => state.overlay.value);

  useEffect(() => {
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      if (isOverLayOpen) {
        bodyElement.style.overflow = "hidden";
      } else {
        bodyElement.style.overflow = "";
      }
    }
  }, [isOverLayOpen]);

  return (
    <RangePicker
      style={isOverLayOpen ? { position: "static" } : {}}
      allowClear={false}
    />
  );
}
