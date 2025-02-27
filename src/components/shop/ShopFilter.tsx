import { ShopViewIcon1, ShopViewIcon2 } from "../../assets/icons";
import CategoriesFilter from "./Filters/CategoriesFilter";
import SearchFilter from "./Filters/SearchFilter";
import PriceFilter from "./Filters/PriceFilter";
import SortByFilter from "./Filters/SortByFilter";

export function ShopFilter({
  handleClick,
  activeCart,
}: {
  handleClick: (cartNumber: number) => void;
  activeCart: number;
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between ~gap-4/6 lg:gap-10">
      <div className="flex flex-col sm:flex-row w-full lg:w-2/5 ~gap-2/4">
        <CategoriesFilter />
        <PriceFilter />
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full lg:w-3/5 ~gap-4/6 md:gap-8">
        <div className="w-full md:w-1/2">
          <SearchFilter />
        </div>

        <div className="flex w-1/2 max-lg:w-full justify-between max-lg:justify-between items-center gap-4 md:gap-6">
          <div className="w-full font-semibold cursor-pointer">
            <SortByFilter
              filterField="discount"
              options={[
                { value: "all", label: "All" },
                { value: "no-discount", label: "No discount" },
                { value: "with-discount", label: "With discount" },
              ]}
            />
          </div>

          <div className="hidden sm:flex items-center gap-2 border cursor-pointer h-fit self-end">
            <div
              className={`p-2 border ${activeCart === 1 ? "bg-gray-200" : ""}`}
              onClick={() => handleClick(1)}
            >
              <ShopViewIcon1 />
            </div>
            <div
              className={`p-2 border ${activeCart === 2 ? "bg-gray-200" : ""}`}
              onClick={() => handleClick(2)}
            >
              <ShopViewIcon2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
