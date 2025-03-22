import { Button as NextButton } from "@nextui-org/button";

export default function Button({
  children,
  className,
  type = "button",
  onClick,
  disabled,
  size = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  size?: "lg" | "sm" | "md";
}) {
  return (
    <NextButton
      color="primary"
      className={`text-white font-semibold bg-black rounded-md text-md hover:bg-gray-800 ${className}`}
      type={type}
      onPress={onClick || (() => {})}
      size={size}
      isDisabled={disabled}
    >
      <div className="flex justify-center">{children}</div>
    </NextButton>
  );
}
