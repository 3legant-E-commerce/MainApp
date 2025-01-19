import { useState } from "react";
import Button from "../../ui/Button";
import StarsRating from "../../ui/Star";
import { TimeCart } from "../../ui/cart/Carts";
// import { HeartIcon } from "../../assets/icons";
import WishListButton from "../../ui/WishListButton";
// import { InputOtp } from "@nextui-org/input-otp";

export default function ProductDetail() {
  const [time] = useState([
    { id: 1, hour: 2, day: "Days" },
    { id: 2, hour: 12, day: "Hours" },
    { id: 3, hour: 5, day: "Minutes" },
    { id: 4, hour: 29, day: "Seconds" },
  ]);

  return (
    <div className="flex justify-center xl:w-3/5">
      <div className="flex flex-col lg:pr-16">
        <div className="flex ~gap-2/4">
          <StarsRating rating={1} />
          <span className="text-sm text-neutral-04">11 Reviews</span>
        </div>
        <h2 className="~my-3/6 ~text-3xl/4xl font-semibold capitalize">
          tray table
        </h2>
        <p className="~mb-2/4 text-sm leading-6 text-neutral-04 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobs seep
          adipisci earum, nihil voluptate provident maxime? Laudantium,
          voluptate deserunt? Voluptatum corrupti excepturi repellendus enim
          doloremque est modi natus beatae similique.
        </p>
        <div className="flex items-center gap-4 pb-6 ~mb-3/6 font-semibold border-b-2">
          <span className="text-2xl">$1000</span>
          <span className="text-lg line-through text-neutral-04 decoration-black">
            $1200
          </span>
        </div>
        <div className="flex flex-col gap-2 pb-6 mb-6 border-b-2">
          <p className="self-start mb-4 text-neutral-07">Offer expires in:</p>
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
              <span>&#x279D;</span>
            </div>
            <span>Black</span>
          </div>
        </div>

        <WishListButton />

        <Button className="mt-4">Add to cart</Button>
      </div>
    </div>
  );
}
