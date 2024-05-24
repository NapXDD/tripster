"use client";

import { setBudget } from "@/lib/features/createPlanning";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Input, InputNumber, InputNumberProps, Slider, Space } from "antd";
import FormItem from "../../form/createPlanningForm/FormItem";
import { useEffect, useState } from "react";
import { getListDate } from "@/utils/function/getListDate";

const transportationMoney = 1500000;

export default function BudgetInput() {
  const dispatch = useAppDispatch();
  const budget = useAppSelector((state) => state.createPlanning.value.budget);
  const newPlan = useAppSelector((state) => state.createPlanning.value);
  const [min, setMin] = useState(3000000);
  const [max, _] = useState(100000000);

  const onChange: InputNumberProps["onChange"] = (newValue) => {
    dispatch(setBudget(newValue as number));
  };

  useEffect(() => {
    const listDate = getListDate(newPlan.startDate, newPlan.endDate);
    if (listDate.length > 2) {
      const minMoney = listDate.length * 400000 + transportationMoney;
      if (budget < minMoney) {
        setMin(minMoney);
        dispatch(setBudget(minMoney));
      } else {
        setMin(minMoney);
      }
    }
  }, [newPlan.startDate, newPlan.endDate]);

  return (
    <FormItem
      label="Ngân sách"
      required
      note="Số tiền thấp nhất sẽ thay đổi theo số ngày của chuyến đi"
    >
      <div className="flex flex-col gap-4 md:lg:flex-row">
        <Slider
          className="w-full md:lg:w-[60%]"
          min={min}
          max={max}
          onChange={onChange}
          value={budget}
          step={500000}
        />
        <Space.Compact className="!w-full md:lg:!w-[40%]">
          <Input
            style={{ width: "35%", backgroundColor: "white" }}
            disabled
            defaultValue="VND"
          />
          <InputNumber
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) =>
              value?.replace(/\$\s?|(,*)/g, "") as unknown as number
            }
            style={{ width: "65%" }}
            min={min}
            max={max}
            value={budget}
            onChange={onChange}
            step={500000}
          />
        </Space.Compact>
      </div>
    </FormItem>
  );
}
