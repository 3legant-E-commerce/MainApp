import { Select, SelectItem } from "@nextui-org/react";

const categorie = [
  { id: "airpod", label: "Airpod" },
  { id: "headphon", label: "Headphon" },
  { id: "headset", label: "Headset" },
  { id: "mobile", label: "Mobile" },
  { id: "test", label: "Test" },
];

export default function CategoriesOption() {
  return (
    <div className="w-1/2">
      <p className="mb-2 text-sm font-semibold uppercase text-neutral-04">
        categories
      </p>
      <Select
        aria-label="test"
        isRequired
        className="max-w-xs"
        defaultSelectedKeys={["airpod"]}
        // placeholder="Select an categories"
      >
        {categorie.map((item) => (
          <SelectItem key={item.id}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
