import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col ~gap-14/16 border bg-[#171D28] md:items-center md:flex-row ">
      <div className="w-full sm:w-1/2 sm:h-1/2">
        <img
          loading="lazy"
          src="./public/images/hero-04.png"
          alt="Hero section picture"
          className="w-full h-[400px] sm:h-4/5"
        />
      </div>
      <div className="px-4 pb-8 text-white">
        <h1 className="mb-6 ~text-4xl/7xl capitalize w-2/3">
          bring the warmth
        </h1>
        <p className="~text-sm/xl text-neutral-03 leading-8 md:w-96 mb-4">
          Everyone needs a good winter jacket. Find yours with our collection
          and more.
        </p>

        <button
          onClick={() => {
            navigate("/shop");
          }}
          className="py-3 text-white transition-all duration-200 rounded-lg px-14 bg-secondary-blue w-fit h-fit hover:bg-blue-800"
        >
          shopping now
        </button>
      </div>
    </section>
  );
}
