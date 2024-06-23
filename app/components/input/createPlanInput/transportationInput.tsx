"use client";
import { setTransportation } from "@/lib/features/createPlanning";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { icon } from "@/utils/vehicalIcon";
import { Tooltip } from "antd";
import FormItem from "../../form/createPlanningForm/FormItem";
import { transportation } from "@/app/types/transportation";

export default function TransportationInput() {
  const dispatch = useAppDispatch();
  const transportation = useAppSelector(
    (state) => state.createPlanning.value.transportation
  );

  const handleTransportation = (vehicle: transportation) => {
    dispatch(setTransportation(vehicle));
  };

  return (
    <FormItem label="Phương tiện" required>
      <div className="flex">
        {icon.map((item, index) => (
          <Tooltip
            placement="bottom"
            title={item.title}
            key={index + item.title}
          >
            <button
              type="button"
              className={`p-2 ${
                transportation === item.value ? "bg-gray-400 rounded-lg" : ""
              }`}
              onClick={() => handleTransportation(item.value)}
            >
              {item.icon}
            </button>
          </Tooltip>
        ))}
      </div>
    </FormItem>
  );
}
