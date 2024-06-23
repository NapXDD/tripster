"use client";

import { destination } from "@/app/types/destination";
import { option } from "@/app/types/option";
import { setDestination } from "@/lib/features/createPlanning";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Select } from "antd";
import FormItem from "../../form/createPlanningForm/FormItem";
import { useEffect, useState } from "react";

const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

export default function DestinationInput({
  destinations,
  label,
  initData,
  setLocation,
}: {
  destinations: option[];
  label: string;
  initData: destination;
  setLocation: Function;
}) {
  const dispatch = useAppDispatch();
  const destination = useAppSelector(
    (state) => state.createPlanning.value.destination
  );
  const startPoint = useAppSelector(
    (state) => state.createPlanning.value.startPoint
  );
  const [newDestination, setNewDestination] = useState([...destinations]);

  const handleOnChange = (idProvince: string) => {
    const destinationData = destinations.filter(
      (item) => item.value === idProvince
    )[0];
    const newDestination: destination = {
      idProvince: destinationData.value,
      name: destinationData.label,
    };
    dispatch(setLocation(newDestination));
  };

  useEffect(() => {
    let updateList: option[] = [];
    if (initData.idProvince === destination.idProvince) {
      updateList = newDestination.map((item) =>
        item.value === startPoint.idProvince
          ? { ...item, disabled: true }
          : { ...item, disabled: undefined }
      );
    } else {
      updateList = newDestination.map((item) =>
        item.value === destination.idProvince
          ? { ...item, disabled: true }
          : { ...item, disabled: undefined }
      );
    }
    setNewDestination(updateList);
  }, [destination, startPoint]);

  return (
    <FormItem label={label} required>
      <Select
        value={initData.idProvince}
        filterOption={filterOption}
        options={newDestination}
        showSearch
        placeholder="Chọn địa điểm"
        onChange={handleOnChange}
      />
    </FormItem>
  );
}
