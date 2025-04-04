import React from "react";
import { Checkbox, cn } from "@heroui/react";
import Button from "../../ui/Button";

interface ShippingOption {
  id: number;
  name: string;
  cost: number; // Changed from string to number for easier calculations
}

interface CartItem {
  id: number;
  title: string;
  quantity: number;
  price: number;
}

interface CartSummaryProps {
  cart: CartItem[]; // Accept cart items as a prop
}

export default function CartSummary({ cart }: CartSummaryProps) {
  const shippingOptions: ShippingOption[] = [
    {
      id: 1,
      name: "Free Shipping",
      cost: 0,
    },
    {
      id: 2,
      name: "Express Shipping",
      cost: 15,
    },
    {
      id: 3,
      name: "Pick Up",
      cost: 21,
    },
  ];

  const [selectedShippingId, setSelectedShippingId] = React.useState<number>(
    shippingOptions[0].id
  );

  const selectedShippingCost =
    shippingOptions.find((option) => option.id === selectedShippingId)?.cost ||
    0;

  // Calculate subtotal dynamically
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Calculate total dynamically
  const total = subtotal + selectedShippingCost;

  function handleCheckboxChange(id: number) {
    setSelectedShippingId(id);
  }

  return (
    <div className="flex flex-col">
      <h3 className="mb-6 font-semibold tracking-wide ~text-base/xl">
        Cart Summary
      </h3>
      {shippingOptions.map((option) => (
        <Checkbox
          key={option.id}
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
          isSelected={selectedShippingId === option.id}
          onValueChange={() => handleCheckboxChange(option.id)}
        >
          <div className="w-full flex items-center justify-between gap-2">
            <p className="~text-xs/base">{option.name}</p>
            <div className="flex flex-col items-end gap-1">
              <span className="text-default-500">
                ${option.cost.toFixed(2)}
              </span>
            </div>
          </div>
        </Checkbox>
      ))}
      <div className="flex justify-between pr-4 pb-3 border-b-2">
        <p className="text-neutral-05 dark:text-grey-300">Subtotal</p>
        <span className="font-semibold ~text-sm/base">
          ${subtotal.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between pr-4 pt-3 font-bold mb-4">
        <p className="text-neutral-05 dark:text-grey-300">Total</p>
        <span className="~text-sm/lg">${total.toFixed(2)}</span>
      </div>
      <Button>Checkout</Button>
    </div>
  );
}
