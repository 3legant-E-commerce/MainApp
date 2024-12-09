import { Button as NextButton } from "@nextui-org/button";

export default function Button({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <NextButton
      color="primary"
      className={`~px-12/8 py-6 font-medium text-white bg-black rounded-md text-md hover:bg-gray-800 ${className}`}
    >
      {title}
    </NextButton>
  );
}
