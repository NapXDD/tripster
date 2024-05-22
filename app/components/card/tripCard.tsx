"use client";

import { avatar } from "@/utils/importer";
import Image from "next/image";
import DropDownButton from "../button/dropDownButton";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { ViewRecentEntity, plan } from "@/utils/entities/plan";
import dayjs from "dayjs";

export default function TripCard({
  data,
  noDropDown,
  userId,
}: {
  data: plan;
  noDropDown?: boolean;
  userId?: string;
}) {
  const currentUser = useAppSelector((state) => state.user.value.user);

  return (
    <div className="flex flex-col gap-2 relative">
      {!noDropDown || currentUser.id === userId ? (
        <DropDownButton
          id={data.id.toString()}
          className="right-0 top-0 mr-2 mt-2 absolute"
        />
      ) : null}
      <Link href={`/planningDetail/${data.id}-${userId}`}>
        <div className="flex flex-col justify-end gap-1">
          <div className="w-full rounded-lg min-h-[150px] bg-blue-200 flex items-center justify-center bg-custom-gradient">
            <div>Chuyến đi tới {data.destination}</div>
          </div>
          <div className="text-sm">Chuyến đi tới {data.destination}</div>
          <div className="text-gray-600 text-sm">
            {dayjs(data.start_day, "YYYY-MM-DDT17:hh:mm.sssZ").format(
              "DD/MM/YYYY"
            )}
            -
            {dayjs(data.end_day, "YYYY-MM-DDT17:hh:mm.sssZ").format(
              "DD/MM/YYYY"
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
