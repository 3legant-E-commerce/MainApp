import { Select, SelectItem } from "@nextui-org/react";

const categorie = [
  { value: "accessory", label: "Accessory" },
  { value: "fashion", label: "Fashion" },
  { value: "home", label: "Home" },
  { value: "book", label: "Book" },
  { value: "health", label: "Health" },
];

function CategoriesFilter() {
  return (
    <div className="sm:w-1/2 w-full self-end">
      <p className="mb-2 ~text-xs/sm font-semibold uppercase text-neutral-04">
        categories
      </p>
      <Select
        aria-label="test"
        isRequired
        className="max-w-lg"
        defaultSelectedKeys={["accessory"]}
        // placeholder="Select an categories"
      >
        {categorie.map((item) => (
          <SelectItem key={item.value}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}

export default CategoriesFilter;
