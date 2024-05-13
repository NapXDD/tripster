import ProfileCard from "@/app/components/card/profileCard";
import TripCard from "@/app/components/card/tripCard";

export default function Profile({ params }: { params: { id: string } }) {
  return (
    <div className="flex gap-4">
      <ProfileCard userId={params.id} />
      <div className="flex flex-col gap-2">
        <div className="title">Các kế hoạch</div>
        <div className="grid grid-cols-3 gap-4">
          <TripCard id="1" />
          <TripCard id="1" />
          <TripCard id="1" />
          <TripCard id="1" />
        </div>
      </div>
    </div>
  );
}
