"use client";

import BudgetInput from "../../input/createPlanInput/budgetInput";
import DestinationInput from "../../input/createPlanInput/destinationInput";
import SelectTagInput from "../../input/createPlanInput/selectTagInput";
import TimeInput from "../../input/createPlanInput/timeInput";
import { activitiesTags, amentitiesTags } from "@/utils/importer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { openOverLay } from "@/lib/features/overlay";
import { openModal } from "@/lib/features/modal";
import { useRouter } from "next/navigation";
import { Divider, Form } from "antd";
import TransportationInput from "../../input/createPlanInput/transportationInput";
import Button from "../../button/button";
import { option } from "@/app/types/option";
import { resetCreatePlanning } from "@/lib/features/createPlanning";

export default function CreatePlanningForm({
  destinationData,
}: {
  destinationData: option[];
}) {
  const user = useAppSelector((state) => state.user.value.user);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (user.email !== "") {
      router.push("/planningSelection");
    } else {
      dispatch(openOverLay(true));
      dispatch(openModal("signin"));
    }
  };

  const handleReset = () => {
    dispatch(resetCreatePlanning());
  };

  return (
    <div className="w-[50%] bg-gray-200 p-5 rounded-lg flex flex-col gap-2">
      <Form onFinish={handleSubmit} autoComplete="off">
        <Form.Item name="transportation">
          <TransportationInput />
        </Form.Item>
        <Form.Item name="destination">
          <DestinationInput destinations={destinationData} />
        </Form.Item>
        <Form.Item name="budget">
          <BudgetInput />
        </Form.Item>
        <Form.Item name="time">
          <TimeInput />
        </Form.Item>
        <Form.Item name="activities">
          <SelectTagInput data={activitiesTags} type="activities" />
        </Form.Item>
        <Form.Item>
          <SelectTagInput data={amentitiesTags} type="amentities" />
        </Form.Item>
        <Divider />
        <div className="flex justify-end gap-2 pb-2">
          <Button className="px-4 py-2" htmlType="button" onClick={handleReset}>
            Về Mặc định
          </Button>
          <Button type="theme" className="px-4 py-2" htmlType="submit">
            Xác nhận
          </Button>
        </div>
      </Form>
    </div>
  );
}
