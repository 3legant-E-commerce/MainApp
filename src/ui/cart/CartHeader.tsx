export default function CartHeader({ title }: { title: string }) {
  return (
    <h2 className="mb-6 text-2xl font-semibold capitalize max-sm:text-center">
      {title}
    </h2>
  );
}
