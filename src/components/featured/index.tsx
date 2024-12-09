import { useRef } from "react";
import {
  FeaturedSvg1,
  FeaturedSvg2,
  FeaturedSvg3,
  FeaturedSvg4,
  FeaturedSvg5,
  FeaturedSvg6,
} from "../../assets/Svg";
import MainContainer from "../../ui/MainContainer";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";

export default function Featured() {
  const { containerRef, scrollLeft, scrollRight } = useHorizontalScroll();

  return (
    <MainContainer className="~mt-6/14">
      {/* Slider */}

      <div
        ref={containerRef}
        className="flex justify-between gap-6 overflow-x-auto scroll-smooth scrollbar-hide md:overflow-hidden"
      >
        <div className="shrink-0">
          <FeaturedSvg1 />
        </div>
        <div className="shrink-0">
          <FeaturedSvg2 />
        </div>
        <div className="shrink-0">
          <FeaturedSvg3 />
        </div>
        <div className="shrink-0">
          <FeaturedSvg4 />
        </div>
        <div className="shrink-0">
          <FeaturedSvg5 />
        </div>
        <div className="shrink-0">
          <FeaturedSvg6 />
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center w-full gap-6 px-4">
        <button
          onClick={() => scrollLeft()}
          className="p-2 bg-gray-100 rounded-full shadow-sm md:hidden"
        >
          ←
        </button>
        <button
          onClick={() => scrollRight()}
          className="p-2 bg-gray-100 rounded-full shadow-sm md:hidden"
        >
          →
        </button>
      </div>
    </MainContainer>
  );
}
