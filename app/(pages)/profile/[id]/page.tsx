import ProfileCard from "@/app/components/card/profileCard";

export default function Profile({ params }: { params: { id: string } }) {
  return (
    <div className="flex">
      <ProfileCard userId={params.id} />
    </div>
  );
}
