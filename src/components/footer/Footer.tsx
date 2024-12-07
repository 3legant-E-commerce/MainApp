import Info from "./Info";
import JoinNewsLetter from "./JoinNewsLetter";
import Legant from "./Legant";
import Page from "./Page";
import MainContainer from "../../ui/MainContainer";

export default function Footer() {
  return (
    <footer className="bg-neutral-03">
      <MainContainer className="flex flex-col justify-center max-sm:text-center sm:grid sm:gap-16 gap-8 grid-cols-2 sm:grid-cols-[2fr_1fr_1fr_2fr] ~pt-8/20 pb-10 text-neutral-04">
        <Legant />
        <Page />
        <Info />
        <JoinNewsLetter />
      </MainContainer>
    </footer>
  );
}
