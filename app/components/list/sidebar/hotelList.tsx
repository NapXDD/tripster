import ListItem from "./listItem";
import ListLayout from "./listLayout";

export default function HotelList() {
  return (
    <ListLayout title="Khách sạn" id="hotel">
      <ListItem>
        <a href="#hotel" className="mt-5 font-normal">
          Xem
        </a>
      </ListItem>
    </ListLayout>
  );
}
