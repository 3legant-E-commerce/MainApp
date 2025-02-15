export default function ShopFilter({
  title,
  children,
  className,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <ul>
      <h4 className="mb-6 font-semibold uppercase text-neutral-05">{title}</h4>
      <li
        className={`flex text-sm flex-col h-64 gap-3 scroll-p-28 ${className}`}
      >
        {children}
      </li>
    </ul>
  );
}
