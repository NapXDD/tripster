"use client";

import { destination } from "@/app/type/destination";
import { option } from "@/app/type/option";
import { setDestination } from "@/lib/features/createPlanning";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Select } from "antd";

const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

export default function DestinationInput({
  destinations,
}: {
  destinations: option[];
}) {
  const dispatch = useAppDispatch();
  const destination = useAppSelector(
    (state) => state.createPlanning.value.destination
  );

  const handleOnChange = (idProvince: string) => {
    const destinationData = destinations.filter(
      (item) => item.value === idProvince
    )[0];
    const newDestination: destination = {
      idProvince: destinationData.value,
      name: destinationData.label,
    };
    dispatch(setDestination(newDestination));
  };

  return (
    <Select
      value={destination.idProvince}
      filterOption={filterOption}
      options={destinations}
      showSearch
      placeholder="Chọn địa điểm"
      onChange={handleOnChange}
    />
  );
}
