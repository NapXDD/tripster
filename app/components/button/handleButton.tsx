export default function HandleButon({
  text,
  icon,
  handleFunc,
}: {
  text: string;
  icon: JSX.Element;
  handleFunc: () => void;
}) {
  return (
    <button className="" onClick={handleFunc}>
      {icon} {text}
    </button>
  );
}
