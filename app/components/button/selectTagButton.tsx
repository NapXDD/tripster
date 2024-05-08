import { Tag } from "@/app/type/Tag";

export default function SelectTagButton(tag: Tag) {
  const handleSelect = (value: string) => {
    console.log(value);
  };

  return <button onClick={() => handleSelect(tag.value)}>{tag.title}</button>;
}
