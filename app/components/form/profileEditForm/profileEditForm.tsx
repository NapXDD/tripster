import { Input } from "antd";
import Button from "../../button/button";
import FormItem from "../overlayForm";

export default function ProfileEditForm() {
  return (
    <div className="flex flex-col gap-3">
      <FormItem label="Username">
        <Input />
      </FormItem>
      <Button>Done</Button>
    </div>
  );
}
