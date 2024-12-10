import { Button as NextButton } from "@nextui-org/button";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <NextButton
      color="primary"
      className={`~px-12/8 py-4 font-medium text-white bg-black rounded-md text-md hover:bg-gray-800 ${className}`}
    >
      {children}
    </NextButton>
  );
}
