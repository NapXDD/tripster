import ListItem from "./listItem";
import ListLayout from "./listLayout";

const data = [
  "lmao",
  "xd",
  "something",
  "test",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
];

export default function InteraryList() {
  return (
    <ListLayout title="Itinerary">
      <div className="flex flex-col gap-5 mt-5">
        <ListItem data={data} id="itinerary" />
      </div>
    </ListLayout>
  );
}
