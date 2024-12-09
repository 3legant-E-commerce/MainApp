import Button from "../Button";
import CartTitle from "./CartTitle";

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
}: {
  src: string;
  title: string;
  detail?: string;
}) {
  return (
    <div className="sm:h-[450px] h-[350px] flex flex-col gap-4">
      <div className="bg-[#F3F5F7] relative rounded-sm p-4 shadow-sm h-3/4 flex flex-col group">
        <span className="absolute px-4 font-semibold ~text-xs/sm capitalize bg-white rounded-md shadow-sm left-4">
          {detail}
        </span>
        <img src={src} title={title} className="w-4/5 mx-auto h-5/6" />

        <Button
          title="Add to cart"
          className="hidden transition duration-600 group-hover:flex"
        />
      </div>
      <div className="hidden border-2 border-red-500 h-1/4 group-hover:block"></div>
    </div>
  );
}
