export default function Error({ children }: { children: React.ReactNode }) {
  return <span className="text-red-500">{children}</span>;
}
