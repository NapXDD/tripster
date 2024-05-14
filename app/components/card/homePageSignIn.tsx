import Link from "next/link";
import TripCard from "./tripCard";

export default function HomePageSignIn() {
  return (
    <div className="min-h-[calc(100vh-10rem)] w-full">
      <div className="flex flex-col mt-4 gap-4">
        <div className="flex justify-between items-center w-full">
          <div className="title">Các kế hoạch đã xem gần đây</div>
          <Link
            className="bgRed px-4 py-2 text-white rounded-3xl"
            href={"/createPlanning"}
          >
            Lập kế hoạch
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <TripCard id="1" noDropDown />
          <TripCard id="1" noDropDown />
          <TripCard id="1" noDropDown />
          <TripCard id="1" noDropDown />
        </div>
      </div>
    </div>
  );
}
