import { Button as NextButton } from "@nextui-org/button";

export default function Button({
  children,
  className,
  type = "button",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler;
}) {
  return (
    <NextButton
      color="primary"
      className={`text-white font-semibold bg-black rounded-md text-md hover:bg-gray-800 ${className}`}
      type={type}
      onClick={onClick}
      size="lg"
    >
      <div className="flex justify-center">{children}</div>
    </NextButton>
  );
}
