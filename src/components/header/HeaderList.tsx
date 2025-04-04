import React from "react";

export default function HeaderList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center max-sm:hidden text-heading-7">
      {children}
    </li>
  );
}
