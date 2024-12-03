// import { useNavigate } from "react-router-dom";

export default function Hero() {
  // const navigate = useNavigate();
  return (
    <section className="~pt-20/4 border-2 border-black">
      <div className="flex flex-col-reverse mx-auto w-full ~gap-x-2/10 items-center ~px-1/6 max-w-7xl md:flex-row">
        <div className="sm:w-1/2">
          <img
            src="../../../public/images/hero-012.png"
            alt="Music Listening mobile"
            className="w-full mx-auto"
          />

          {/* <img
            src="../../../public/images/hero-012.png"
            alt="Music Listening desktop"
            className="hidden sm:block"
          /> */}
        </div>

        <div className="p-4 text-center sm:w-1/2 md:text-left">
          <h1 className="mb-6 ~text-3xl/6xl capitalize font-semibold">
            Listen to the <span className="text-blue-500">amazing</span> music
            sound.
          </h1>

          <p className="text-lg text-gray-700">
            Experience music like never before
          </p>
          <button className="~px-12/8 py-4 mt-4 font-medium text-white bg-black rounded-md text-md hover:bg-gray-800">
            Shopping Now
          </button>
        </div>
      </div>
    </section>
  );
}

//// <section className="flex flex-col ~gap-14/16 pt-12 border md:items-center md:flex-row">
//   <div className="w-full">
//     {/* <img
//       loading="lazy"
//       src="./public/images/hero-01.png"
//       alt="Hero section picture"
//       className="w-full h-[400px] sm:h-4/5"
//     /> */}
//     <HeroSvg />
//   </div>
//   <div className="px-4 pb-8 text-[#121212]">
//     <h1 className="mb-6 ~text-4xl/7xl capitalize w-2/3">
//       Listen to the <span className="text-[#377DFF]">amazing</span>music
//       sound.
//     </h1>
//     <p className="~text-sm/xl text-neutral-03 leading-8 md:w-96 mb-4">
//       Everyone needs a good winter jacket. Find yours with our collection
//       and more.
//     </p>

//     <button
//       onClick={() => {
//         navigate("/shop");
//       }}
//       className="py-3 text-white transition-all duration-200 rounded-lg px-14 bg-secondary-blue w-fit h-fit hover:bg-blue-800"
//     >
//       shopping now
//     </button>
//   </div>
// </section>
