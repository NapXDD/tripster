import Link from "next/link";
import TripCard from "./tripCard";
import { topFourRecent } from "@/utils/api/plan";
import { revalidatePath } from "next/cache";
import { unstable_noStore as noStore } from "next/cache";

export default async function HomePageSignIn({
  userId,
  token,
}: {
  userId: string;
  token: string;
}) {
  noStore();
  revalidatePath("/", "page");
  const res = await topFourRecent(token);
  return (
    <div className="w-full">
      <div className="flex flex-col mt-4 gap-4">
        <div className="flex justify-between items-center w-full">
          <div className="title text-lg">Các kế hoạch đã xem gần đây</div>
          {/* <Link
            className="bgRed px-4 py-2 text-white rounded-3xl"
            href={"/createPlanning"}
          >
            Lập kế hoạch
          </Link> */}
        </div>

        {res.messageData.plan.length > 0 ? (
          <div className={`grid gap-4 grid-cols-1 lg:grid-cols-4`}>
            {res.messageData.plan.map((item, index) => (
              <TripCard
                key={item.id + index}
                data={item}
                userId={userId}
                noDropDown
              />
            ))}
          </div>
        ) : (
          <div className="title flex justify-center items-center text-gray-500 border min-h-[200px] rounded-lg">
            <div>Chưa có dữ liệu</div>
          </div>
        )}
      </div>
    </div>
  );
}
