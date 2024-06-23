import BudgetList from "./list/sidebar/budgetList";
import HotelList from "./list/sidebar/hotelList";
import InteraryList from "./list/sidebar/interaryList";
import TransportationList from "./list/sidebar/transportationList";

export default function SideBar() {
  return (
    <div className="overflow-y-auto hideScrollBar bg-white fixed w-[25%] mt-[5rem] border h-[calc(100vh-5rem)] lg:w-[15%]">
      <div className="flex flex-col m-2 mt-10">
        <BudgetList />
        <InteraryList />
        <HotelList />
        <TransportationList />
      </div>
    </div>
  );
}
