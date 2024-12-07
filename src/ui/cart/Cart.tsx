import React from "react";

export default function Cart({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex bg-[#F3F5F7] mb-8 ${className}`}>{children}</div>
  );
}
