"use client";
import { setDate } from "@/lib/features/createPlanning";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { DatePicker } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import FormItem from "../../form/createPlanningForm/FormItem";

const { RangePicker } = DatePicker;

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select day in the past
  return current && current <= dayjs().subtract(1, "day");
};

export default function TimeInput() {
  const dispatch = useAppDispatch();
  const newPlan = useAppSelector((state) => state.createPlanning.value);
  console.log(newPlan);
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

  return (
    <FormItem label="Thời gian" required>
      <RangePicker
        value={[
          dayjs(newPlan.startDate, "DD/MM/YYYY"),
          dayjs(newPlan.endDate, "DD/MM/YYYY"),
        ]}
        style={{ width: "100%" }}
        onChange={handleValue}
        allowClear={false}
        format={"DD/MM/YYYY"}
        disabledDate={disabledDate}
      />
    </FormItem>
  );
}
