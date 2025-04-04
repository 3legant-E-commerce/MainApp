import { useSelector } from "react-redux";
import Table from "../../ui/Table";
import ShoppingRow from "./ShoppingRow";
import CartSummary from "./CartSummary";
import { getCart } from "./cartSlice";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

export default function ShoppingCart() {
  const navigate = useNavigate();
  const cart = useSelector(getCart); // Get cart data from Redux
  console.log("Cart data:", cart);

  if (!cart || cart.length === 0) {
    return <p>No products available in the cart</p>; // Handle empty cart
  }

  const cartItems = [
    { id: 1, title: "Product 1", quantity: 2, price: 50 },
    { id: 2, title: "Product 2", quantity: 1, price: 100 },
  ];

  return (
    <div className="flex max-xl:flex-col items-center gap-8">
      <div className="xl:w-2/3 w-full">
        <Button
          onClick={() => navigate("/shop")}
          className="bg-bg-color text-xs mb-4 px-4 h-10 hover:bg-gray-800"
        >
          &larr; Back to shop
        </Button>

        <Table columns="2.4fr 1.5fr 1fr 1fr">
          <Table.Header>
            <p>Product</p>
            <p className="max-lg:hidden text-center">Quantity</p>
            <p className="max-lg:hidden">Price</p>
            <p className="max-lg:hidden">Total Price</p>
          </Table.Header>
          <Table.Body
            data={cart}
            render={(item) => <ShoppingRow key={item.shopId} shop={item} />}
          />
        </Table>

        <div className="flex flex-col gap-3 md:w-2/3 border-2 rounded-md p-4 mt-10">
          <p className="font-semibold ~text-sm/lg">Have a coupon?</p>
          <span className="text-stone-400 ~text-xs/base">
            Add your code for an instant cart discount
          </span>
          <input type="text" className="border-2 w-2/3 h-8" />
        </div>
      </div>

      <div className="xl:w-1/3 w-full max-w-[500px] border-2 p-6 border-gray-400 rounded-lg">
        <CartSummary cart={cartItems} />
      </div>
    </div>
  );
}
