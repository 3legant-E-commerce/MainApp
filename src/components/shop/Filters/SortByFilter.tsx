import { useSearchParams } from "react-router-dom";
import { Select, SelectItem } from "@nextui-org/react";

interface FilterProps {
  filterField: string;
  options: { value: string; label: string }[];
}

// const options = [
//   { value: "all", label: "All" },
//   { value: "no-discount", label: "No discount" },
//   { value: "with-discount", label: "With discount" },
// ];

export default function SortBy({ filterField, options }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value: string) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="w-full">
      <p className="mb-2 text-xs font-semibold uppercase text-neutral-04">
        Sort By
      </p>

      <Select
        className="w-full"
        // label="Sort By"
        // placeholder="Select an option"
        onSelectionChange={(value) =>
          handleClick(Array.from(value)[0] as string)
        }
        defaultSelectedKeys={["all"]}
        aria-label="test"
      >
        {options.map((option) => (
          <SelectItem key={option.value}>{option.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
