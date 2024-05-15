"use client";
import { setDate } from "@/lib/features/createPlanning";
import { useAppDispatch } from "@/lib/hooks";
import { DatePicker } from "antd";
import { RangePickerProps } from "antd/es/date-picker";

const { RangePicker } = DatePicker;

export default function TimeInput() {
  const dispatch = useAppDispatch();

  const handleValue: RangePickerProps["onChange"] = (dates) => {
    if (dates) {
      if (dates[0] && dates[1]) {
        dispatch(
          setDate([
            dates[0].format("DD/MM/YYYY"),
            dates[1].format("DD/MM/YYYY"),
          ])
        );
      }
    }
  };

  return <RangePicker onChange={handleValue} allowClear={false} />;
}
