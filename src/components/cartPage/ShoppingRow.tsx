import { useDispatch } from "react-redux";
import Table from "../../ui/Table";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
} from "./cartSlice";

interface Shop {
  shopId: string;
  title: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  image?: string;
  images?: string;
}

function ShoppingRow({ shop }: { shop: Shop }) {
  const { shopId, title, quantity, unitPrice, totalPrice, image, images } =
    shop;
  // console.log("my shop image", image);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(shopId));
  };

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(shopId));
  };

  const handleRemove = () => {
    dispatch(deleteItem(shopId));
  };

  return (
    <Table.Row>
      <div className="flex gap-4 h-20">
        <img
          src={images?.at(0) ? images.at(0) : image}
          className="w-3/5 rounded-sm shadow-sm"
          alt={title}
        />
        <div className="flex w-2/5 flex-col justify-evenly">
          <h3 className="capitalize font-semibold ~text-sm/medium">{title}</h3>
          <div
            className="max-lg:flex self-start hidden gap-2 items-center justify-center text-neutral-04 cursor-pointer ~text-xs/sm"
            onClick={handleRemove}
          >
            <span className="text-lg">&#9747;</span>
            <span>Remove</span>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden justify-between border-2 border-stone-400 rounded-md">
        <button className="text-lg font-semibold px-2" onClick={handleDecrease}>
          -
        </button>
        <input
          type="text"
          value={quantity}
          readOnly
          className="w-2/3 text-center"
        />
        <button className="text-lg font-semibold px-2" onClick={handleIncrease}>
          +
        </button>
      </div>

      <div className="flex max-lg:justify-end">{unitPrice}</div>
      <div className="flex max-lg:justify-end">{totalPrice}</div>
    </Table.Row>
  );
}

export default ShoppingRow;
