import ProfileCard from "@/app/components/card/profileCard";
import TripCard from "@/app/components/card/tripCard";
import { getUserPlans } from "@/utils/api/plan";
import { getSession } from "next-auth/react";

export default async function Profile({ params }: { params: { id: string } }) {
  const res = await getUserPlans(params.id);
  return (
    <div className="flex gap-4 flex-col items-center sm:justify-center md:lg:flex-row md:lg:justify-normal md:lg:items-start md:lg:w-auto">
      <ProfileCard userId={params.id} />
      <div className="flex flex-col gap-2">
        <div className="title">Các kế hoạch</div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {res.messageData.plan.map((item, index) => (
            <TripCard
              data={item}
              key={item.id + index}
              userId={params.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
