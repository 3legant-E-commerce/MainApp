export default function CategoriesFilter({
  text,
  onClick,
}: {
  text: string;
  onClick?: React.MouseEventHandler;
}) {
  return (
    <a
      className="w-1/3 capitalize duration-200 cursor-pointer text-neutral-04 hover:text-neutral-06 hover:underline hover:underline-offset-4 hover:transition-all"
      onClick={onClick}
    >
      {text}
    </a>
  );
}
