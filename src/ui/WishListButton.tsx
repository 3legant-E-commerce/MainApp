import { HeartIcon } from "../assets/icons";

export default function WishListButton() {
  return (
    <button
      className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-2 font-semibold text-black transition-all bg-white rounded-md shadow-sm hover:bg-gray-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-300"
      aria-label="Add to Wishlist"
    >
      <HeartIcon className="w-6 h-6 text-red-500 transition-transform hover:scale-125 ~text-sm/md md:text-md" />
      <span className="~text-sm/md md:text-md">Wishlist</span>
    </button>
  );
}
