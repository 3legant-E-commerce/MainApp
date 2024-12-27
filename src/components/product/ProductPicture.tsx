import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function ProductPicture() {
  return (
    <div className="flex flex-col w-3/6 h-full gap-4">
      <div className="relative h-3/4">
        <img
          src="/images/chair01.png"
          className="w-full h-full"
          alt="chair01"
        />
        <span className="absolute px-4 py-1 font-semibold text-white ~text-xs/sm uppercase bg-green-300 rounded-sm shadow-sm left-4 top-11">
          -50%
        </span>
        <span className="absolute px-4 py-1 font-semibold ~text-xs/sm uppercase bg-white rounded-sm shadow-sm left-4 top-2">
          New
        </span>
        <div className="absolute flex items-center justify-center bg-white rounded-full shadow-sm cursor-pointer w-9 h-9 top-1/2 left-4">
          <AiOutlineArrowLeft />
        </div>
        <div className="absolute flex items-center justify-center bg-white rounded-full shadow-sm cursor-pointer w-9 h-9 top-1/2 right-4">
          <AiOutlineArrowRight />
        </div>
      </div>

      <div className="flex gap-5 h-1/4">
        <div className="w-1/3 h-full">
          <img
            src="/images/chair02.png"
            className="w-full h-full"
            alt="chair02"
          />
        </div>
        <div className="w-1/3">
          <img
            src="/images/chair03.png"
            className="w-full h-full"
            alt="chair03"
          />
        </div>
        <div className="w-1/3">
          <img
            src="/images/chair04.png"
            className="w-full h-full"
            alt="chair04"
          />
        </div>
      </div>
    </div>
  );
}
