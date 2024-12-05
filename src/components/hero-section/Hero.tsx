// import { useNavigate } from "react-router-dom";

export default function Hero() {
  // const navigate = useNavigate();
  return (
    <section className="~pt-20/4">
      <div className="flex flex-col-reverse mx-auto w-full ~gap-x-2/10 items-center ~px-1/6 max-w-7xl md:flex-row">
        <div className="sm:w-1/2">
          <img
            src="../../../public/images/hero-012.png"
            alt="Music Listening mobile"
            className="w-full mx-auto"
          />
        </div>

        <div className="p-4 text-center sm:w-1/2 md:text-left">
          <h1 className="mb-6 ~text-3xl/6xl capitalize font-semibold">
            Listen to the <span className="text-blue-500">TESTTTTTTTTT</span>
            music sound.
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
