import React from "react";

export default function HeaderList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center text-heading-7 xl:text-2xl">{children}</li>
  );
}
