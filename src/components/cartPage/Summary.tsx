import React from "react";
import { Checkbox, cn } from "@nextui-org/react";
import Button from "../../ui/Button";

interface User {
  id: number;
  name: string;
  role: string;
}

export default function Summery() {
  const user: User[] = [
    {
      id: 1,
      name: "Free Shipping",
      role: "$0.00",
    },
    {
      id: 2,
      name: "Express Shipping",
      role: "$15.00",
    },
    {
      id: 3,
      name: "Pick Up",
      role: "$21.00",
    },
  ];

  const [selectedId, setSelectedId] = React.useState<number | null>(user[0].id);

  function handleCheckboxChange(id: number) {
    setSelectedId(id);
  }

  return (
    <div className="flex flex-col">
      <h3 className="mb-6 font-semibold tracking-wide ~text-base/xl">
        Cart Summary
      </h3>
      {user.map((item) => (
        <Checkbox
          key={item.id}
          classNames={{
            base: cn(
              "inline-flex w-full max-w-md bg-content1",
              "hover:bg-content2 items-center justify-start",
              "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
              "data-[selected=true]:border-primary",
              "mb-4"
            ),
            label: "w-full",
          }}
          isSelected={selectedId === item.id}
          onValueChange={() => handleCheckboxChange(item.id)}
        >
          <div className="w-full flex items-center justify-between gap-2">
            <p className="~text-xs/base">{item.name}</p>
            <div className="flex flex-col items-end gap-1">
              <span className="text-default-500">{item.role}</span>
            </div>
          </div>
        </Checkbox>
      ))}
      <div className="flex justify-between pr-4 pb-3 border-b-2">
        <p className="text-neutral-05">Subtutal</p>
        <span className="font-semibold ~text-sm/base">$1234.00</span>
      </div>
      <div className="flex justify-between pr-4 pt-3 font-bold mb-4">
        <p className="text-neutral-05">Total</p>
        <span className="~text-sm/lg">$1345.00</span>
      </div>
      <Button>Checkout</Button>
    </div>
  );
}
