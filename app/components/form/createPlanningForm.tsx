"use client";

import { Button } from "antd";
import BudgetInput from "../input/budgetInput";
import DestinationInput from "../input/destinationInput";
import SelectTagInput from "../input/selectTagInput";
import TimeInput from "../input/timeInput";
import TransportationInput from "../input/transportationInput";
import { activitiesTags, amentitiesTags } from "@/utils/importer";
import { useAppSelector } from "@/lib/hooks";

export default function CreatePlanningForm() {
  const planning = useAppSelector((state) => state.planning.value);

  const handleSubmit = () => {
    console.log(planning);
  };
  return (
    <div className="w-[60%] bg-gray-200 p-5 rounded-lg flex flex-col gap-2">
      <div className="flex flex-col">
        <div className="font-bold mb-1">Chọn phương tiện</div>
        <TransportationInput />
      </div>
      <div className="flex flex-col">
        <div className="font-bold mb-1">Ngân sách</div>
        <BudgetInput />
      </div>
      <div className="flex flex-col static">
        <div className="font-bold mb-1">Thời gian</div>
        <TimeInput />
      </div>
      <div className="flex flex-col">
        <div className="font-bold mb-1">Điểm đến</div>
        <DestinationInput />
      </div>
      <div className="flex flex-col">
        <div className="font-bold mb-1">Hoạt động</div>
        <SelectTagInput data={activitiesTags} type="activities" />
      </div>
      <div className="flex flex-col">
        <div className="font-bold mb-1">tiện ích, dịch vụ</div>
        <SelectTagInput data={amentitiesTags} type="amentities" />
      </div>
      <Button style={{ position: "static" }} onClick={handleSubmit}>
        Lập kế hoạch
      </Button>
    </div>
  );
}
