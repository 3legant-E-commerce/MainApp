import { Select, SelectItem } from "@nextui-org/react";

const priceOptions = [
  { id: "all", label: "All Prices" },
  { id: "0-99", label: "$0 - $99" },
  { id: "100-199", label: "$100 - $199" },
  { id: "200-299", label: "$200 - $299" },
  { id: "400+", label: "$400+" },
];

export default function PriceFilter() {
  return (
    <div className="sm:w-1/2 w-full">
      <p className="mb-2 ~text-xs/sm font-semibold uppercase text-neutral-04">
        Price
      </p>
      <Select
        aria-label="test"
        isRequired
        className="max-w-lg"
        defaultSelectedKeys={[priceOptions[0].id]}
        // onSelectionChange={(key) => handleFilterChange(key as string)}
      >
        {priceOptions.map((option) => (
          <SelectItem key={option.id}>{option.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
