import Link from "next/link";
import TripCard from "./tripCard";
import { topFourRecent } from "@/utils/api/plan";

export default async function HomePageSignIn({
  userId,
  token,
}: {
  userId: string;
  token: string;
}) {
  const res = await topFourRecent(token);
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
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {res.messageData.plan.map((item, index) => (
            <TripCard
              key={item.id + index}
              data={item}
              userId={userId}
              noDropDown
            />
          ))}
        </div>
      </div>
    </div>
  );
}
