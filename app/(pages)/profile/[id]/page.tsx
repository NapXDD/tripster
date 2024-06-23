import ProfileCard from "@/app/components/card/profileCard";
import TripCard from "@/app/components/card/tripCard";
import { getUserPlans } from "@/utils/api/plan";
import { revalidatePath, revalidateTag } from "next/cache";
import { unstable_noStore as noStore } from "next/cache";

export const dynamic = "force-dynamic";

export default async function Profile({ params }: { params: { id: string } }) {
  noStore();
  revalidatePath(`/profile/:path*`, "page");
  const res = await getUserPlans(params.id, "getUserPlan");

  return (
    <div className="flex gap-4 flex-col items-center sm:justify-center md:lg:flex-row md:lg:justify-normal md:lg:items-start md:lg:w-auto">
      <ProfileCard userId={params.id} />
      <div className="flex flex-col basis-[100%] gap-2 mt-2">
        <div className="title text-lg">Các kế hoạch</div>
        {res.messageData.plan.length === 0 ? (
          <div className="title flex justify-center items-center text-gray-500 border min-h-[200px] rounded-lg">
            <div>Chưa có dữ liệu</div>
          </div>
        ) : (
          <div className={`grid gap-4 grid-cols-1 lg:grid-cols-4`}>
            {res.messageData.plan.map((item, index) => (
              <TripCard data={item} key={item.id + index} userId={params.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
