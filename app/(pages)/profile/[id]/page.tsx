import ProfileCard from "@/app/components/card/profileCard";
import TripCard from "@/app/components/card/tripCard";

export default function Profile({ params }: { params: { id: string } }) {
  return (
    <div className="flex gap-4">
      <ProfileCard userId={params.id} />
      <div className="flex flex-col gap-2">
        <div className="title">Các kế hoạch</div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <TripCard id="1" userId={params.id} />
          <TripCard id="1" userId={params.id} />
          <TripCard id="1" userId={params.id} />
          <TripCard id="1" userId={params.id} />
        </div>
      </div>
    </div>
  );
}
