import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ShopHeader() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-60 sm:h-80 lg:h-[400px] 3xl:h-[530px]">
      <img
        src="../../../public/images/shopHeader08.jpg"
        className="absolute z-[-1] w-full h-full"
      />
      <div className="flex flex-col items-center h-full ~pt-4/12 text-black">
        <div className="~mb-0.5/2 ~text-xs/base text-neutral-04">
          <Breadcrumbs underline="active">
            <BreadcrumbItem onClick={() => navigate("/")} key="home" size="sm">
              Home
            </BreadcrumbItem>

            <BreadcrumbItem size="sm">Shop</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <h1 className="~mb-3/4 ~text-xl/4xl text-neutral-06 font-semibold">
          Shop Page
        </h1>
        <p className="w-1/2 text-center ~text-xs/base text-neutral-05">
          Let's design the place you always imgined.
        </p>
      </div>
    </div>
  );
}
