"use client";

import { setBudget } from "@/lib/features/createPlanning";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Input, InputNumber, InputNumberProps, Slider, Space } from "antd";
import FormItem from "../../form/createPlanningForm/FormItem";

export default function BudgetInput() {
  const dispatch = useAppDispatch();
  const budget = useAppSelector((state) => state.createPlanning.value.budget);

  const onChange: InputNumberProps["onChange"] = (newValue) => {
    dispatch(setBudget(newValue as number));
  };

  return (
    <FormItem label="Ngân sách" required>
      <div className="flex flex-col gap-4 md:lg:flex-row">
        <Slider
          className="w-full md:lg:w-[60%]"
          min={1000000}
          max={100000000}
          onChange={onChange}
          value={budget}
        />
        <Space.Compact className="!w-full md:lg:!w-[40%]">
          <Input
            style={{ width: "35%", backgroundColor: "white" }}
            disabled
            defaultValue="VND"
          />
          <InputNumber
            style={{ width: "65%" }}
            min={1000000}
            max={100000000}
            value={budget}
            onChange={onChange}
          />
        </Space.Compact>
      </div>
    </FormItem>
  );
}
