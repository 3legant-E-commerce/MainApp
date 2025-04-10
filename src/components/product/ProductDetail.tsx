import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../cartPage/cartSlice";
import Button from "../../ui/Button";
import StarsRating from "../../ui/Star";
import { TimeCart } from "../../ui/cart/Carts";
import { Loading } from "../../ui/Loading";
import WishListButton from "../../ui/WishListButton";
import { formatCurrency } from "../../utils/helper";
import { useShoping } from "../shop/useShoping";
import { useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shoping, isLoading, error } = useShoping();

  const { id, title, discount, rating, description, price } = shoping || {};

  const [time] = useState([
    { id: 1, hour: 2, day: "Days" },
    { id: 2, hour: 12, day: "Hours" },
    { id: 3, hour: 5, day: "Minutes" },
    { id: 4, hour: 29, day: "Seconds" },
  ]);

  const priceWithDiscount = price - (price * (discount ?? 0)) / 100;

  // Handle loading and error states
  if (isLoading) return <Loading />;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  const handleAddToCart = () => {
    const newItem = {
      shopId: id,
      title,
      quantity: 1,
      unitPrice: priceWithDiscount,
      totalPrice: priceWithDiscount,
    };

    dispatch(addItem(newItem));
    navigate(`/cart/${shoping.id}`);
  };

  return (
    <div className="flex justify-center xl:w-3/5">
      <div className="flex flex-col lg:px-16 w-full">
        <div className="flex ~gap-2/4">
          <StarsRating rating={rating} />
          <span className="text-sm text-neutral-04">11 Reviews</span>
        </div>
        <h2 className="~my-3/6 ~text-3xl/4xl font-semibold capitalize">
          {title}
        </h2>
        <p className="~mb-2/4 text-sm leading-6 text-neutral-04 line-clamp-4">
          {description}
        </p>
        <div className="flex items-center gap-4 pb-6 ~mb-3/6 font-semibold border-b-2">
          <span className="text-2xl">{formatCurrency(priceWithDiscount)}</span>
          <span className="text-lg line-through text-neutral-04 decoration-black">
            {priceWithDiscount === price ? "" : formatCurrency(price)}
          </span>
        </div>
        <div className="flex flex-col gap-2 pb-6 mb-6 border-b-2">
          <p className="self-start mb-4 text-neutral-07 dark:text-grey-200">
            Offer expires in:
          </p>
          <div className="flex gap-4 ~mb-4/6">
            {time.map((item) => (
              <TimeCart
                key={item.id}
                hour={item.hour}
                day={item.day}
                bg="bg-neutral-02"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 ~mb-6/8">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 text-xs cursor-pointer hover:text-neutral-05 text-neutral-04">
              <span className="font-semibold">Choose Color</span>
              <span>➝</span>
            </div>
            <span>Black</span>
          </div>
        </div>

        <WishListButton />

        <Button className="mt-4" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
