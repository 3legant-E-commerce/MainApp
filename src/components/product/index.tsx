import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import MainContainer from "../../ui/MainContainer";
import { useNavigate } from "react-router-dom";
import ProductPicture from "./ProductPicture";
import ProductDetail from "./ProductDetail";

export default function ShopHeader() {
  const navigate = useNavigate();

  return (
    <MainContainer className="pt-24">
      <div className="~mb-0.5/4 ~text-xs/base text-neutral-04">
        <Breadcrumbs underline="active">
          <BreadcrumbItem onClick={() => navigate("/")} key="home" size="md">
            Home
          </BreadcrumbItem>

          <BreadcrumbItem
            onClick={() => navigate("/shop")}
            key="shop"
            size="md"
          >
            Shop
          </BreadcrumbItem>
          <BreadcrumbItem size="md">Living Room</BreadcrumbItem>
          <BreadcrumbItem size="md">Product</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div className="flex gap-14">
        <ProductPicture />
        <ProductDetail />
      </div>
    </MainContainer>
  );
}
