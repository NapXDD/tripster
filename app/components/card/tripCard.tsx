"use client";

import { avatar } from "@/utils/importer";
import Image from "next/image";
import DropDownButton from "../button/dropDownButton";
import Link from "next/link";

export default function TripCard({ id }: { id: string }) {
  return (
    <div className="flex flex-col gap-2 relative">
      <DropDownButton id={id} className="right-0 top-0 mr-2 mt-2 absolute" />
      <Link href={`/planningDetail/${id}`}>
        <div className="flex flex-col justify-end">
          <Image
            src={avatar}
            alt="trip card image"
            width={500}
            height={300}
            className="w-full rounded-lg"
            objectFit="cover"
          />
          <div>Trip to HCM</div>
          <div className="text-gray-600">Apr1-May7</div>
        </div>
      </Link>
    </div>
  );
}
