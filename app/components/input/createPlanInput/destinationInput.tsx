"use client";

import { destination } from "@/app/type/destination";
import { setDestination } from "@/lib/features/createPlanning";
import { useAppDispatch } from "@/lib/hooks";
import removeProvincePrefix from "@/utils/function/getProvinceList";
import { Select } from "antd";
import { useEffect, useState } from "react";

interface destinationSelector {
  label: string;
  value: string;
}

const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

export default function DestinationInput({
  destination,
}: {
  destination: destination[];
}) {
  const [destinationData, setDestinationData] = useState<destination[]>([]);
  const [option, setOption] = useState<destinationSelector[]>([]);
  const dispatch = useAppDispatch();

  const handleOnChange = (idProvince: string) => {
    const destinationID = destinationData.filter(
      (item) => item.idProvince === idProvince
    )[0];
    dispatch(setDestination(destinationID.name));
  };

  useEffect(() => {
    //create option for antd select component
    let option: destinationSelector[] = [];
    destination.forEach((item) => {
      let data: destinationSelector = {
        label: item.name,
        value: item.idProvince,
      };
      option.push(data);
    });
    setOption(option);

    //remove province prefix to give data to backend
    const provinceList = removeProvincePrefix(destination);
    setDestinationData(provinceList);
  }, []);

  return (
    <div className="flex flex-col">
      <Select
        filterOption={filterOption}
        options={option}
        showSearch
        placeholder="Chọn địa điểm"
        onChange={handleOnChange}
      />
    </div>
  );
}
