"use client";

import DropDownButton from "../button/dropDownButton";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import dayjs from "dayjs";
import { plan } from "@/utils/entities/plan";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { setUser } from "@/lib/features/user";
import Image from "next/image";
import { avatar } from "@/utils/importer";
import { getImageProvince } from "@/utils/api/province";

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
  const dispatch = useAppDispatch();
  const { data: session, update } = useSession();
  const [image, setImage] = useState(avatar);

  useEffect(() => {
    if (session !== null && session !== undefined) {
      dispatch(setUser(session?.user));
    }
  }, [update]);

  const imageProvince = async () => {
    const res = await getImageProvince(data.end_point);
    if (res.status === "200") {
      setImage(res.messageData.image);
    }
  };

  useEffect(() => {
    imageProvince();
  }, []);

  return (
    <div className="flex flex-col-reverse gap-2 relative">
      {!noDropDown || currentUser.id.toString() === userId ? (
        <DropDownButton
          id={`${data.id.toString()}-${currentUser.id}`}
          className="right-0 top-0 mr-2 mt-2 absolute"
        />
      ) : null}
      <Link href={`/planningDetail/${data.id}-${userId}`}>
        <div className="flex flex-col justify-end gap-1">
          <div className="w-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            {/* <div className="text-white font-bold text-lg">
              <div>Chuyến đi tới {data.end_point}</div>
              <div>Plan ID: {data.id}</div>
            </div> */}
            <Image
              src={image}
              alt="trip card image"
              width={500}
              height={300}
              className="w-full rounded-lg object-scale-down"
            />
          </div>
          <div className="text-sm">Chuyến đi tới {data.end_point}</div>
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
