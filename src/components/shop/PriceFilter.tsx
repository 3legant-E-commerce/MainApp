import { Select, SelectItem } from "@nextui-org/react";

const priceOptions = [
  { id: "all", label: "All Prices" },
  { id: "0-99", label: "$0 - $99" },
  { id: "100-199", label: "$100 - $199" },
  { id: "200-299", label: "$200 - $299" },
  { id: "400+", label: "$400+" },
];

// const items = [
//   { id: 1, name: "Item 1", price: 50 },
//   { id: 2, name: "Item 2", price: 150 },
//   { id: 3, name: "Item 3", price: 250 },
//   { id: 4, name: "Item 4", price: 450 },
// ];

export default function PriceFilter() {
  return (
    <div className="w-1/2">
      <p className="mb-2 text-sm font-semibold uppercase text-neutral-04">
        Price
      </p>
      <Select
        aria-label="test"
        isRequired
        className="max-w-xs"
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
