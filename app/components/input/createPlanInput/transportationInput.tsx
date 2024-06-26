"use client";
import { setTransportation } from "@/lib/features/createPlanning";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { icon } from "@/utils/vehicalIcon";
import { Tooltip } from "antd";

export default function TransportationInput() {
  const dispatch = useAppDispatch();
  const transportation = useAppSelector(
    (state) => state.createPlanning.value.transportation
  );

  const handleTransportation = (vehicle: string) => {
    dispatch(setTransportation(vehicle));
  };

  return (
    <div className="flex">
      {icon.map((item, index) => (
        <Tooltip placement="bottom" title={item.title} key={index + item.title}>
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
  );
}
