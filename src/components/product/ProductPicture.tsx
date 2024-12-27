import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function ProductPicture() {
  const images = [
    "/images/chair02.png",
    "/images/chair03.png",
    "/images/chair04.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Track the active image index

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col w-3/6 gap-y-4">
      <div className="relative h-4/5">
        <img
          src={images[activeIndex]}
          className="object-cover w-full h-full"
          alt={`chair${activeIndex + 1}`}
        />
        <span className="absolute px-4 py-1 text-xs font-semibold text-white uppercase bg-green-300 rounded-sm shadow-sm left-4 top-11">
          -50%
        </span>
        <span className="absolute px-4 py-1 text-xs font-semibold uppercase bg-white rounded-sm shadow-sm left-4 top-2">
          New
        </span>

        <div
          onClick={handlePrevious}
          className="absolute flex items-center justify-center transform -translate-y-1/2 bg-white rounded-full shadow-sm cursor-pointer w-9 h-9 top-1/2 left-4 hover:bg-gray-200"
        >
          <AiOutlineArrowLeft />
        </div>
        <div
          onClick={handleNext}
          className="absolute flex items-center justify-center transform -translate-y-1/2 bg-white rounded-full shadow-sm cursor-pointer w-9 h-9 top-1/2 right-4 hover:bg-gray-200"
        >
          <AiOutlineArrowRight />
        </div>
      </div>

      <div className="flex gap-4 h-1/5">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-1/3 h-full cursor-pointer border-2 rounded-md ${
              activeIndex === index ? "border-gray-800" : "border-transparent"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              className="object-cover w-full h-full rounded-md"
              alt={`Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPicture;
