import { useState } from "react";
import Button from "../../ui/Button";
import { TimeCart } from "../../ui/cart/Cart";

export default function Promotion() {
  const [time] = useState([
    { id: 1, hour: 2, day: "Days" },
    { id: 2, hour: 5, day: "Hours" },
    { id: 3, hour: 12, day: "Minutes" },
    { id: 4, hour: 48, day: "Seconds" },
  ]);

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
          {time.map((item) => (
            <TimeCart key={item.id} hour={item.hour} day={item.day} />
          ))}
        </div>

        <Button className="self-start w-full sm:py-6">shop now</Button>
      </div>
    </section>
  );
}
