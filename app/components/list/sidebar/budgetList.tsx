import ListItem from "./listItem";
import ListLayout from "./listLayout";

export default function BudgetList() {
  return (
    <ListLayout title="Budget">
      <ListItem>
        <a href="#budget" className="mt-5 font-normal">
          View
        </a>
      </ListItem>
    </ListLayout>
  );
}
