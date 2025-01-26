import Button from "../../ui/Button";

export default function CompleteCart() {
  return (
    <div className="border w-full md:w-3/5 mx-auto px-4 ~py-8/14 shadow-lg flex flex-col justify-center ~gap-2/6 items-center rounded-md">
      <h3 className="text-neutral-04 ~text-sm/lg md:text-xl font-semibold">
        Thank you!🎉
      </h3>
      <p className="~text-xl/3xl w-full md:w-3/5 font-semibold text-neutral-05 text-center">
        Your order has been received
      </p>
      <div className="flex ~gap-2/10 h-28 px-2 py-2 w-full justify-center">
        <img
          src="../../../public/images/sofa-01.png"
          className="w-1/3 md:w-1/5"
          alt=""
        />
        <img
          src="../../../public/images/sofa-01.png"
          className="w-1/3 md:w-1/5"
          alt=""
        />
        <img
          src="../../../public/images/sofa-01.png"
          className="w-1/3 md:w-1/5"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4 w-2/5 mx-auto">
        <div className="flex justify-between">
          <span className="text-neutral-04">Order code:</span>
          <span className="text-stone-600 font-semibold">123456789</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-04">Date:</span>
          <span className="text-stone-600 font-semibold">123456789</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-04">Total:</span>
          <span className="text-stone-600 font-semibold">123456789</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-04">Payment method:</span>
          <span className="text-stone-600 font-semibold">123456789</span>
        </div>
      </div>
      <Button className="bg-black text-white px-6 py-3 rounded-full mt-4">
        Purchase history
      </Button>
    </div>
  );
}
