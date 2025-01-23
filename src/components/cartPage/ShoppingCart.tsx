import { useState } from "react";
import Table from "../../ui/Table";
import ShoppingRow from "./ShoppingRow";
import Summary from "./Summary";

export default function ShoppingCart() {
  const [shopping] = useState([
    {
      id: 1,
      title: "tray table",
      color: "blue",
      quantity: 2,
      price: 200,
      // subtotal: 600,
    },
    {
      id: 2,
      title: "tray table",
      color: "red",
      quantity: 1,
      price: 500,
      // subtotal: 100,
    },
    {
      id: 3,
      title: "tray table",
      color: "black",
      quantity: 3,
      price: 3000,
      // subtotal: 200,
    },
  ]);

  return (
    <div className="flex max-xl:flex-col gap-8 items-center">
      <div className="xl:w-2/3 w-full">
        <Table columns="2.4fr 1.5fr 1fr 1fr">
          <Table.Header>
            <p>Product</p>
            <p className="max-lg:hidden text-center">Quantity</p>
            <p className="max-lg:hidden">Price</p>
          </Table.Header>
          <Table.Body
            data={shopping}
            render={(shop) => <ShoppingRow key={shop.id} shop={shop} />}
          />
        </Table>
      </div>

      <div className="xl:w-1/3 w-full max-w-[500px] border-2 p-6 border-gray-400 rounded-lg">
        <Summary />
      </div>
    </div>
  );
}
