import Button from "../Button";
import CartTitle from "./CartTitle";
import StarsRating from "../Star";
import WishListButton from "../WishListButton";

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

export function ShopCartView1({
  src,
  title,
  detail,
  description,
  price,
  discount,
  priceDecoration,
  rating,
  children,
}: {
  src: string;
  title: string;
  detail?: string;
  description: string;
  price: number;
  discount?: number;
  priceDecoration?: number;
  rating: number;
  children?: React.ReactNode;
}) {
  return (
    <div className="sm:h-[350px] h-[350px] flex flex-col gap-4">
      <div className="bg-[#F3F5F7] relative rounded-sm p-4 shadow-sm h-3/4 cursor-pointer group">
        <span className="absolute px-4 font-semibold ~text-xs/sm uppercase bg-white rounded-sm shadow-sm left-4">
          {detail}
        </span>
        <span className="absolute px-4 font-semibold ~text-xs/sm uppercase bg-green-300 rounded-sm shadow-sm left-4 top-11">
          {discount}
        </span>
        <img src={src} title={title} className="w-4/5 mx-auto mt-6 h-5/6" />

        {children}
      </div>
      <div className="flex flex-col gap-1 font-semibold h-1/4">
        <div className="h-1/4">
          <StarsRating rating={rating} />
        </div>
        <div className="pr-4 text-sm line-clamp-1 h-1/2">{description}</div>
        <div className="flex items-center gap-4 text-xs font-bold h-1/4">
          <span>${price}</span>
          <span className="line-through text-neutral-04 decoration-black">
            {priceDecoration}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ShopCartView2({
  detail,
  discount,
  src,
  title,
  rating,
  description,
  price,
  priceDecoration,
}: {
  detail?: string;
  discount?: number;
  src: string;
  title: string;
  rating: number;
  description: string;
  price: number;
  priceDecoration?: number;
}) {
  return (
    <div className="flex border-2 rounded-sm shadow-sm cursor-pointer">
      <div className="bg-[#F3F5F7] relative w-1/2 h-full">
        <span className="absolute px-4 font-semibold ~text-xs/sm uppercase bg-white rounded-sm shadow-sm left-4 top-4">
          {detail}
        </span>
        <span className="absolute px-4 font-semibold ~text-xs/sm uppercase bg-green-300 rounded-sm shadow-sm left-4 top-11">
          {discount}
        </span>
        <img src={src} title={title} className="h-full" />
      </div>
      <div className="flex flex-col w-1/2 px-6 overflow-hidden py-7">
        <StarsRating rating={rating} />
        <h2 className="mt-4 text-xl font-semibold capitalize">{title}</h2>
        <div className="flex items-center gap-4 mt-2 mb-6 text-sm font-bold">
          <span>${price}</span>
          <span className="line-through text-neutral-04 decoration-black">
            {priceDecoration}
          </span>
        </div>
        <div className="text-sm leading-6 h-28 text-neutral-04 line-clamp-4">
          {description}
        </div>
        <Button className="mt-4">Add to cart</Button>
        <WishListButton />
      </div>
    </div>
  );
}

export function BenefitCart({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="~h-40/52 ~px-4/8 ~pt-8/12 rounded-sm shadow-sm lg:h-56 bg-neutral-02">
      <div className="mb-4">{icon}</div>
      <p className="~mb-0.5/2 font-semibold capitalize ~text-sm/xl text-neutral-07">
        {title}
      </p>
      <span className="~text-xs/sm text-neutral-04 line-clamp-1 overflow-hidden text-ellipsis">
        {text}
      </span>
    </div>
  );
}

export function TimeCart({
  hour,
  day,
  bg = "bg-white",
}: {
  hour: number;
  day: string;
  bg?: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-0.5 sm:gap-1">
      <span
        className={`flex items-center justify-center ~w-10/16 ~h-10/16 ~text-2xl/3xl font-semibold ${bg} text-neutral-07`}
      >
        {hour}
      </span>
      <span className="text-xs font-semibold capitalize text-neutral-04">
        {day}
      </span>
    </div>
  );
}
