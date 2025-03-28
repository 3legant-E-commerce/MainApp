import { ReactNode, MouseEventHandler } from "react";

interface ButtonIconProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

function ButtonIcon({
  children,
  onClick,
  disabled,
  className,
}: ButtonIconProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-2 rounded-lg hover:bg-orange-400 dark:hover:bg-grey-700 
                 transition-all duration-200 ease-in-out transform hover:scale-110 ${className}`}
    >
      <div className="text-brand-600">{children}</div>
    </button>
  );
}

export default ButtonIcon;
