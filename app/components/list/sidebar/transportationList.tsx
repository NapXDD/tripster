import ListItem from "./listItem";
import ListLayout from "./listLayout";

export default function TransportationList() {
  return (
    <ListLayout title="Phương tiện" id="transportation">
      <ListItem>
        <a href="#transportation" className="mt-5 font-normal">
          Xem
        </a>
      </ListItem>
    </ListLayout>
  );
}
