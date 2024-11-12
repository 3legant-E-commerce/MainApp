import React from "react";

export default function HeaderList({
  children,
}: {
  children: React.ReactNode;
}) {
  return <li className="flex items-center max-sm:hidden">{children}</li>;
}
