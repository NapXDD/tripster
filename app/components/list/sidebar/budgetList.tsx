import ListItem from "./listItem";
import ListLayout from "./listLayout";

export default function BudgetList() {
  return (
    <ListLayout title="Ngân sách" id="budget">
      <ListItem>
        <a href="#budget" className="mt-5 font-normal">
          View
        </a>
      </ListItem>
    </ListLayout>
  );
}
