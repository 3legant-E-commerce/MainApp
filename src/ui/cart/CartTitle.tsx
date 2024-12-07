export default function CartTitle({ title }: { title: string }) {
  return (
    <div className="pb-8 capitalize">
      <p className="text-2xl font-semibold">{title}</p>
      <button className="text-sm underline transition-all duration-200 underline-offset-4 hover:text-medium">
        collection →
      </button>
    </div>
  );
}
