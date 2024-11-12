import Input from "../../ui/Input";

export default function JoinNewsLetter() {
  return (
    <div>
      <h2 className="mb-8 text-2xl font-semibold text-neutral-06">
        Join Newsletter
      </h2>

      <div className="flex flex-col gap-8 max-sm:items-center">
        <span>
          Subscribe our newsletter to get more deals, new products and
          promotions
        </span>

        <Input type="text" placeholder="enter your email" />
      </div>
    </div>
  );
}
