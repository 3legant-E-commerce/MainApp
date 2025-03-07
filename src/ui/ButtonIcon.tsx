import { ReactNode, MouseEventHandler } from "react";

interface ButtonIconProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function ButtonIcon({ children, onClick, disabled }: ButtonIconProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex justify-center items-center bg-none border-none w-8 h-8 rounded-md transition-all duration-200 hover:bg-orange-400"
    >
      <div className="text-brand-600">{children}</div>
    </button>
  );
}

export default ButtonIcon;
