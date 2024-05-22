"use client";

import BudgetInput from "../../input/createPlanInput/budgetInput";
import DestinationInput from "../../input/createPlanInput/destinationInput";
import SelectTagInput from "../../input/createPlanInput/selectTagInput";
import TimeInput from "../../input/createPlanInput/timeInput";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { openOverLay } from "@/lib/features/overlay";
import { openModal } from "@/lib/features/modal";
import { useRouter } from "next/navigation";
import { Divider, Form } from "antd";
import TransportationInput from "../../input/createPlanInput/transportationInput";
import Button from "../../button/button";
import { option } from "@/app/types/option";
import {
  resetCreatePlanning,
  setDestination,
  setStartPoint,
} from "@/lib/features/createPlanning";
import { Tag } from "@/app/types/tag/tag";
import { checkValidFlight, createPlan } from "@/utils/api/plan";
import removeProvincePrefix from "@/utils/function/getProvince";
import { toast } from "react-toastify";
import { CreatePlanDTO } from "@/utils/DTO/plan";
import dayjs from "dayjs";
import { setMultiplan } from "@/lib/features/multiplan";
import { setupPlan } from "@/utils/function/setupPlan";
import { setRawPlan } from "@/lib/features/rawCreatePlan";

export default function CreatePlanningForm({
  destinationData,
  amenityTags,
  activityTags,
}: {
  destinationData: option[];
  amenityTags: Tag[];
  activityTags: Tag[];
}) {
  const currentUser = useAppSelector((state) => state.user.value.user);
  const newPlan = useAppSelector((state) => state.createPlanning.value);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    if (currentUser.email !== "") {
      try {
        const res = await checkValidFlight(
          {
            departure: removeProvincePrefix(newPlan.startPoint.name),
            arrival: removeProvincePrefix(newPlan.destination.name),
          },
          currentUser.token
        );
        if (res.status === "200") {
          const amenities = newPlan.amentities.map((item) => item.id);
          const activities = newPlan.activities.map((item) => item.name);
          //modify data here
          const data: CreatePlanDTO = {
            budget: newPlan.budget,
            start_day: dayjs(newPlan.startDate, "DD/MM/YYYY").format(
              "YYYY-MM-DD"
            ),
            end_day: dayjs(newPlan.endDate, "DD/MM/YYYY").format("YYYY-MM-DD"),
            end_point: removeProvincePrefix(newPlan.destination.name),
            start_point: removeProvincePrefix(newPlan.startPoint.name),
            type_transport: newPlan.transportation,
            amenities_input: amenities,
            types: activities,
          };
          const res = await createPlan(data, currentUser.token);
          if (res.status === "200") {
            dispatch(setRawPlan(res));
            const plans = setupPlan(res);
            dispatch(setMultiplan(plans));
            router.push("/planningSelection");
          }
        }
      } catch (e) {
        toast.error(
          `Không có chuyến bay từ ${newPlan.startPoint.name} tới ${newPlan.destination.name}`
        );
      }
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
        <div className="flex gap-4 flex-col lg:flex-row">
          <Form.Item style={{ width: "100%" }} name="startPoint">
            <DestinationInput
              setLocation={setStartPoint}
              initData={newPlan.startPoint}
              label="Điểm đi"
              destinations={destinationData}
            />
          </Form.Item>
          <Form.Item style={{ width: "100%" }} name="destination">
            <DestinationInput
              setLocation={setDestination}
              initData={newPlan.destination}
              label="Điểm đến"
              destinations={destinationData}
            />
          </Form.Item>
        </div>
        <Form.Item name="transportation">
          <TransportationInput />
        </Form.Item>
        <Form.Item name="time">
          <TimeInput />
        </Form.Item>
        <Form.Item name="budget">
          <BudgetInput />
        </Form.Item>
        <Form.Item name="activities">
          <SelectTagInput
            data={activityTags}
            type="activities"
            note="Không bắt buộc, có thể lựa chọn tối đa tới 5 tag"
          />
        </Form.Item>
        <Form.Item>
          <SelectTagInput
            data={amenityTags}
            type="amentities"
            note="Không bắt buộc, có thể lựa chọn tối đa tới 5 tag"
          />
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
