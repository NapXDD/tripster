export default function ErrorHelperText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-nowrap">
      <div className="ant-form-item-explain ant-form-item-explain-connected css-dev-only-do-not-override-kghr11">
        <div className="ant-form-item-explain-error">{children}</div>
      </div>
    </div>
  );
}
