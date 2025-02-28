import { Spinner } from "@nextui-org/react";

export function Loading() {
  return (
    <Spinner
      color="warning"
      labelColor="success"
      size="lg"
      className="flex items-center justify-center h-screen"
      label="Loading..."
    />
  );
}
