"use client";

import BudgetInput from "../../input/createPlanInput/budgetInput";
import DestinationInput from "../../input/createPlanInput/destinationInput";
import SelectTagInput from "../../input/createPlanInput/selectTagInput";
import TimeInput from "../../input/createPlanInput/timeInput";
import { activitiesTags, amentitiesTags } from "@/utils/importer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import FormItem from "./FormItem";
import { openOverLay } from "@/lib/features/overlay";
import { openModal } from "@/lib/features/modal";
import { useRouter } from "next/navigation";
import { Divider, Form } from "antd";
import checkTransportation from "@/utils/validator/checkTransportation";
import TransportationInput from "../../input/createPlanInput/transportationInput";
import checkDestination from "@/utils/validator/checkDestination";
import checkBudget from "@/utils/validator/checkBudget";
import checkStartEndDate from "@/utils/validator/checkStartEndDate";
import Button from "../../button/button";
import { option } from "@/app/type/option";
import {
  resetCreatePlanning,
  setTransportation,
} from "@/lib/features/createPlanning";

export default function CreatePlanningForm({
  destinationData,
}: {
  destinationData: option[];
}) {
  const newPlanning = useAppSelector((state) => state.createPlanning.value);
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
          <FormItem label="Phương tiện" required>
            <TransportationInput />
          </FormItem>
        </Form.Item>
        <Form.Item name="destination">
          <FormItem label="Điểm đến" required>
            <DestinationInput destinations={destinationData} />
          </FormItem>
        </Form.Item>
        <Form.Item name="budget">
          <FormItem label="Ngân sách" required>
            <BudgetInput />
          </FormItem>
        </Form.Item>
        <Form.Item name="time">
          <FormItem label="Thời gian" required>
            <TimeInput />
          </FormItem>
        </Form.Item>
        <Form.Item>
          <FormItem label="Hoạt động">
            <SelectTagInput data={activitiesTags} type="activities" />
          </FormItem>
        </Form.Item>
        <Form.Item>
          <FormItem label="Tiện ích, dịch vụ">
            <SelectTagInput data={amentitiesTags} type="amentities" />
          </FormItem>
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
