import MainContainer from "../../ui/MainContainer";
import ProductPicture from "./ProductPicture";
import ProductDetail from "./ProductDetail";
import BreadCrumb from "../../ui/BreadCrumb";
import Comment from "./Comment";

export default function ShopHeader() {
  return (
    <MainContainer className="~pt-20/24">
      <div className="mb-4 ~text-xs/base text-neutral-04">
        <BreadCrumb />
      </div>

      <div className="flex flex-col xl:flex-row ~gap-8/14 mb-10">
        <ProductPicture />
        <ProductDetail />
      </div>

      <Comment />
    </MainContainer>
  );
}
