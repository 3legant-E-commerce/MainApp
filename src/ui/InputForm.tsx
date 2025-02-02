import Button from "./Button";

export default function InputForm({
  // title,
  button = "submit",
  children,
  onSubmit,
  className,
}: {
  // title: string;
  button?: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}) {
  return (
    <form
      className="w-full ~gap-4/8 md:flex-nowrap flex flex-col"
      onSubmit={onSubmit}
    >
      <div className={`px-6 ${className}`}>
        {/* <h2 className="font-semibold text-xl mb-8">{title}</h2> */}
        <div className="flex flex-col gap-y-10">{children}</div>
      </div>

      <Button
        type="submit"
        className="~text-sm/lg ~px-6/12 w-full md:w-1/2 mx-auto mt-8"
      >
        {button}
      </Button>
    </form>
  );
}
