"use client";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

export default function TimeInput() {
  const handleValue = (dates: [unknown, unknown] | null) => {
    console.log(dates);
  };

  return <RangePicker onChange={handleValue} allowClear={false} />;
}
