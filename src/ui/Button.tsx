import { Button as NextButton } from "@nextui-org/button";

export default function Button({
  children,
  className,
  type = "button",
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <NextButton
      color="primary"
      className={`font-medium text-white bg-black rounded-md text-md hover:bg-gray-800 ${className}`}
      type={type}
    >
      {children}
    </NextButton>
  );
}
