import { Spinner } from "@nextui-org/react";

export function Loading() {
  return (
    <Spinner
      color="warning"
      labelColor="success"
      size="lg"
      className="flex items-center justify-center h-screen border-2 border-black bg-slate-200"
      label="Loading..."
    />
  );
}
