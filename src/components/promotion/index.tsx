import Button from "../../ui/Button";

export default function Promotion() {
  return (
    <section className="~mt-16/24 flex flex-col-reverse sm:flex-row">
      <img className="sm:w-1/2" src="/images/headphone-02.png" />

      <div className="sm:w-1/2 ~px-8/16 max-sm:flex flex-col items-center ~py-6/24 bg-[#ffaa0066]">
        <p className="~mb-4/8 text-sm font-bold text-blue-500 uppercase">
          promotion
        </p>

        <h3 className="~text-3xl/5xl font-semibold mb-6">Hurry up! 40% OFF</h3>

        <p className="~mb-6/12 ~text-md/2xl text-neutral-06">
          Thousands of high tech are waiting for you
        </p>

        <p className="self-start mb-4 text-neutral-07">Offer expires in:</p>

        <div className="flex gap-4 ~mb-4/6">
          <div className="flex flex-col items-center gap-0.5 sm:gap-1">
            <span className="flex items-center justify-center ~w-12/16 ~h-12/16 text-3xl font-semibold bg-white text-neutral-07">
              02
            </span>
            <span className="text-xs font-semibold capitalize">days</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 sm:gap-1">
            <span className="flex items-center justify-center ~w-12/16 ~h-12/16 text-3xl font-semibold bg-white text-neutral-07">
              12
            </span>
            <span className="text-xs font-semibold capitalize">days</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 sm:gap-1">
            <span className="flex items-center justify-center ~w-12/16 ~h-12/16 text-3xl font-semibold bg-white text-neutral-07">
              45
            </span>
            <span className="text-xs font-semibold capitalize">days</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 sm:gap-1">
            <span className="flex items-center justify-center ~w-12/16 ~h-12/16 text-3xl font-semibold bg-white text-neutral-07">
              05
            </span>
            <span className="text-xs font-semibold capitalize">days</span>
          </div>
        </div>

        <Button className="self-start w-2/3 sm:w-1/2 md:w-1/3 sm:py-6">
          shop now
        </Button>
      </div>
    </section>
  );
}
