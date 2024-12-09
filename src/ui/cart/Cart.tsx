import { Image } from "@nextui-org/react";

import Button from "../Button";
import CartTitle from "./CartTitle";
import StarsRating from "../Star";

export function CartCol({
  className,
  src,
  title,
}: {
  className?: string;
  src?: string;
  title?: string;
}) {
  return (
    <div
      className={`flex flex-col col-span-1 row-span-2 shadow-sm ~px-6/14 rounded-sm bg-[#F3F5F7] pt-8 ${className}`}
    >
      <img src={src} title={title} className="w-5/6 mx-auto h-5/6" />
      <CartTitle title={title} className="h-1/6" />
    </div>
  );
}

export function CartRow({
  className,
  src,
  title,
}: {
  className?: string;
  src?: string;
  title?: string;
}) {
  return (
    <div
      className={`flex flex-row-reverse rounded-sm col-span-1 row-span-1 shadow-sm ~px-4/8 bg-[#F3F5F7] pt-6 ${className}`}
    >
      <img src={src} title={title} className="w-1/2 sm:w-3/5" />
      <CartTitle title={title} className="self-end w-1/2 ~mb-6/14 sm:w-2/5" />
    </div>
  );
}

export function CartHover({
  src,
  title,
  detail,
  description,
  price,
  rating,
}: {
  src: string;
  title: string;
  detail?: string;
  description: string;
  price: number;
  rating: number;
}) {
  return (
    <div className="sm:h-[400px] h-[350px] flex flex-col gap-4">
      <div className="bg-[#F3F5F7] relative rounded-sm p-4 shadow-sm h-3/4 cursor-pointer group">
        <span className="absolute px-4 font-semibold ~text-xs/sm capitalize bg-white rounded-md shadow-sm left-4">
          {detail}
        </span>
        <img src={src} title={title} className="w-4/5 mx-auto h-5/6" />

        <Button
          title="Add to cart"
          className="absolute w-3/4 transition-all duration-1000 transform -translate-x-1/2 translate-y-4 opacity-0 bottom-4 left-1/2 group-hover:opacity-100 group-hover:translate-y-0"
        />
      </div>
      <div className="flex flex-col gap-1 font-semibold h-1/4">
        <div className="h-1/4">
          <StarsRating rating={rating} />
        </div>
        <div className="text-sm h-1/2">{description}</div>
        <span className="flex items-center text-xs font-bold h-1/4">
          ${price}
        </span>
      </div>
    </div>
  );
}
