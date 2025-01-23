import Table from "../../ui/Table";

interface Shop {
  id: number;
  title: string;
  color: string;
  quantity: number;
  price: number;
  //   subtotal: number;
}

function ShoppingRow({ shop }: { shop: Shop }) {
  return (
    <Table.Row>
      <div className="flex gap-4 h-20">
        <img
          src="../../../public/images/airpod-01.jpg"
          className="w-3/5 rounded-sm shadow-sm"
          alt="airpod"
        />
        <div className="flex w-2/5 flex-col justify-evenly">
          <h3 className="capitalize font-semibold ~text-sm/medium">
            {shop.title}
          </h3>
          <span className="text-neutral-04 ~text-xs/sm capitalize">
            color: {shop.color}
          </span>
          <div className="max-lg:flex self-start hidden gap-2 items-center justify-center text-neutral-04 cursor-pointer ~text-xs/sm">
            <span className="text-lg">&#9747;</span>
            <span>Remove</span>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden justify-center">{shop.quantity}</div>
      <div className="flex max-lg:justify-end">{shop.price}</div>
      <div className="lg:flex hidden gap-2 items-center justify-center text-neutral-04 cursor-pointer hover:font-semibold hover:text-md transition-all duration-100 hover:text-neutral-05">
        <span>Remove</span>
        <span className="text-lg">&#9747;</span>
      </div>
    </Table.Row>
  );
}

export default ShoppingRow;
