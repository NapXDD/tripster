"use client";

import BudgetInput from "../../input/createPlanInput/budgetInput";
import DestinationInput from "../../input/createPlanInput/destinationInput";
import SelectTagInput from "../../input/createPlanInput/selectTagInput";
import TimeInput from "../../input/createPlanInput/timeInput";
import TransportationInput from "../../input/createPlanInput/transportationInput";
import { activitiesTags, amentitiesTags } from "@/utils/importer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import FormItem from "./FormItem";
import { openOverLay } from "@/lib/features/overlay";
import { openModal } from "@/lib/features/modal";
import Button from "../../button/button";
import { useRouter } from "next/navigation";
import { destination } from "@/app/type/destination";
import { Form } from "antd";

export default function CreatePlanningForm({
  destinationData,
}: {
  destinationData: destination[];
}) {
  const newPlanning = useAppSelector((state) => state.createPlanning.value);
  const user = useAppSelector((state) => state.user.value.user);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (user.email !== "") {
      console.log(newPlanning);
      router.push("/planningSelection");
    } else {
      dispatch(openOverLay(true));
      dispatch(openModal("signin"));
    }
  };

  return (
    <div className="w-[60%] bg-gray-200 p-5 rounded-lg flex flex-col gap-2">
      <FormItem label="Chọn phương tiện">
        <TransportationInput />
      </FormItem>
      <FormItem label="Điểm đến">
        <DestinationInput destination={destinationData} />
      </FormItem>
      <FormItem label="Ngân sách">
        <BudgetInput />
      </FormItem>
      <FormItem label="Thời gian">
        <TimeInput />
      </FormItem>
      <FormItem label="Hoạt động">
        <SelectTagInput data={activitiesTags} type="activities" />
      </FormItem>
      <FormItem label="Tiện ích, dịch vụ">
        <SelectTagInput data={amentitiesTags} type="amentities" />
      </FormItem>
      <div className="flex">
        <Button className="w-auto px-2 py-2" onClick={handleSubmit}>
          Lập kế hoạch
        </Button>
      </div>
    </div>
  );
}
