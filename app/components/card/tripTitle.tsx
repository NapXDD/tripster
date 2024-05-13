import PlanningDetailLayout from "./planningDetailLayout";

export default function TripTitle({ title }: { title: string }) {
  return (
    <PlanningDetailLayout>
      <div className="h-16 flex items-center title">Trip to {title}</div>
    </PlanningDetailLayout>
  );
}
