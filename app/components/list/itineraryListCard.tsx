import ActivityCard from "../card/activityCard";
import DestinationCard from "../card/destinationCard";

const data = [
  { value: <DestinationCard data={null} /> },
  { value: <DestinationCard data={null} /> },
  { value: <DestinationCard data={null} /> },
  { value: <DestinationCard data={null} /> },
];

export default function ItineraryListCard({ id }: { id?: string }) {
  return (
    <div className="flex flex-col gap-8">
      {data.map((item, index) => (
        <ActivityCard key={index + "itinerary"} content={item.value} />
      ))}
    </div>
  );
}
