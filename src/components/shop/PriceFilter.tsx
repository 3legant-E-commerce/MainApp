import { Checkbox } from "@nextui-org/react";

export default function PriceFilter({ text }: { text: string }) {
  return (
    <label className="flex justify-between cursor-pointer">
      <span className="flex justify-between capitalize duration-200 cursor-pointer text-neutral-04 hover:text-neutral-06 hover:transition-all">
        {text}
      </span>
      <Checkbox dir="rtl" color="primary" radius="sm" size="md" />
    </label>
  );
}
