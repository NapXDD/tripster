import { activity } from "@/app/types/plan";
import Image from "next/image";

function ActivityCard({ data }: { data: activity }) {
  return (
    <div className="flex gap-4">
      <div className="flex bg-gray-200 basis-[100%] rounded-lg">
        <div className="flex flex-col m-4">
          <div className="title text-lg">{data.name}</div>
          <div className="text-lg font-semibold text-gray-800">
            Mở cửa từ {data.openTime} tới {data.closeTime}
          </div>
          <div className="text-lg font-semibold text-gray-800">
            Cost: {data.price} VND
          </div>
          <div className="text-lg font-semibold text-gray-800">
            Rating: {data.rating}
          </div>
          <div className="text-lg font-semibold text-gray-800">
            Hoạt động: {data.type_activity}
          </div>
        </div>
      </div>
      <Image
        width={150}
        height={100}
        src={data.image}
        alt={data.name}
        className="rounded-lg w-auto object-cover"
      />
    </div>
  );
}

export default function DestinationCard({ data }: { data: activity[] | null }) {
  return (
    <div className="flex flex-col">
      {data === null ? (
        <div className="text-gray-500 text-sm">No place</div>
      ) : (
        <div className="grid grid-flow-row row-span-1 gap-4">
          {data.map((item, index) => (
            <ActivityCard key={index + item.name} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}
