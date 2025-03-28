import Info from "./Info";
import JoinNewsLetter from "./JoinNewsLetter";
import Legant from "./Legant";
import Page from "./Page";
import MainContainer from "../../ui/MainContainer";
import { Input } from "@heroui/react";

export default function Footer() {
  return (
    <footer>
      <div className="relative">
        <img src="/images/hero-02.png" className="w-full h-80" alt="sofa" />
        <div className="absolute translate-x-1/2 top-1/4 right-1/2">
          <h3 className="~text-2xl/4xl min-w-64 text-center font-semibold text-neutral-07">
            Join Our Newsletter
          </h3>
          <p className="~mt-2/4 ~text-sm/base text-center text-neutral-05">
            Sign up for deals, new products and promotions
          </p>
          <Input
            label="Email Address"
            type="text"
            id="name"
            variant="underlined"
            size="sm"
            // placeholder="Enter your name"
            className="~mt-2/6 placeholder:text-sm"
          />
        </div>
      </div>
      <div className="bg-neutral-07">
        <MainContainer className="bg-neutral-07 flex flex-col justify-center max-sm:text-center sm:grid sm:gap-16 gap-8 grid-cols-2 sm:grid-cols-[2fr_1fr_1fr_2fr] ~pt-8/20 pb-10 text-neutral-04">
          <Legant />
          <Page />
          <Info />
          <JoinNewsLetter />
        </MainContainer>
      </div>
    </footer>
  );
}
