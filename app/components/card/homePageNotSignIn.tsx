import { wallpaper } from "@/utils/importer";
import Image from "next/image";
import Link from "next/link";

export default function HomePageNotSignIn() {
  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <div className="title mb-2">
          Lên kế hoạch thực hiện chuyến đi cùng Tripster
        </div>
        <div className="text-gray-600 mb-4">
          Travel planning at its best. Build, organize and map your custom
          itineraries in a free travel app designed for vacations & road trips,
          powered by our trip planner AI
        </div>
        <Link
          className="bgRed px-5 py-2 text-white rounded-3xl"
          href={"/createPlanning"}
        >
          Lập kế hoạch
        </Link>
      </div>
      <div className="w-1/2">
        <Image
          src={wallpaper}
          alt="entry"
          width={500}
          height={500}
          style={{ width: "100%" }}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
