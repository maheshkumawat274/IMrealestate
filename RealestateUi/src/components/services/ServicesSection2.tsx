

import React, { useState, useRef, useEffect } from "react";

type ImageSliderProps = {
  images: string[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const [thumbnailsVisible, setThumbnailsVisible] = useState(4);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Update visible thumbnails based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setThumbnailsVisible(3);
      } else {
        setThumbnailsVisible(4);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Auto-scroll thumbnails when currentIndex changes
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const thumbnailWidth = 104; // 96px (w-24) + 8px (gap)
      const scrollPosition = currentIndex * thumbnailWidth;
      
      thumbnailContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative h-[250px] sm:h-[350px] rounded-xl overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Property"
          className="w-full h-full object-cover"
        />
        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#1A3E72] text-white p-2 rounded-full shadow-md"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1A3E72] text-white p-2 rounded-full shadow-md"
        >
          ❯
        </button>
      </div>

      {/* Thumbnails with auto-scroll */}
      <div className="relative mt-4 sm:mt-6">
        <div className="flex items-center justify-center">
          {/* Thumbnail container with scroll */}
          <div 
            ref={thumbnailContainerRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ maxWidth: `${thumbnailsVisible * 104}px` }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => goToSlide(i)}
                className={`cursor-pointer border-4 rounded-lg overflow-hidden transition-all duration-200 flex-shrink-0 snap-start ${
                  currentIndex === i ? "border-[#1A3E72] scale-105" : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i}`}
                  className="w-20 h-14 sm:w-24 sm:h-16 object-cover rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Indicator dots for mobile */}
        {/* <div className="flex justify-center mt-4 md:hidden">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                currentIndex === i ? "bg-[#1A3E72]" : "bg-gray-300"
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

type SectionProps = {
  title: string;
  description: string;
  price: string;
  buttonText: string;
  images: string[];
  reverse?: boolean;
  index: number;
};

const PropertySection: React.FC<SectionProps> = ({
  title,
  description,
  price,
  buttonText,
  images,
  reverse,
  index,
}) => {
  return (
    <div
      className="sticky top-[-150px] md:top-[100px] max-w-7xl mx-auto w-full"
      style={{
        zIndex: 20 + index,
      }}
    >
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-10 bg-white rounded-2xl border-1 border-gray-200 p-2 sm:p-8`}
      >
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-lg font-bold">
            Starting From <span className="text-[]">{price}</span>
          </p>
          <button className="mt-6 bg-[#1A3E72] hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-md transition">
            {buttonText}
          </button>
        </div>

        {/* Image Slider */}
        <div className="flex-1">
          <ImageSlider images={images} />
        </div>
      </div>
    </div>
  );
};

const ServicesSection2: React.FC = () => {
  const sections = [
    {
      title: "Luxury villas",
      description: "Discover Dubai’s most exquisite villas with us. Our collection features contemporary architecture, prestigious addresses, and upscale amenities—each residence carefully chosen for exceptional quality, comfort, and style.",
      price: "19M AED",
      buttonText: "Find Dream Projects",
      images: [
        "/imgs/Premium-villa-6.webp",
        "/imgs/Premium-villa-5.webp",
        "/imgs/Premium-villa-4.webp",
        "/imgs/Premium-villa-3.webp",
        "/imgs/Premium-villa-2-image.webp",
        "/imgs/Premium-villa-11.webp",
        "/imgs/Premium-villa-10.webp",
        "/imgs/Premium-villa-7.webp",
        "/imgs/Premium-Villas-1.webp",
      ],
    },
    {
      title: "Invest in Townhouses",
      description:
        "Discover our exclusive Dubai townhouses, where contemporary architecture meets functional living. Nestled in sought-after communities, each home provides comfort, style, and everyday convenience—perfect for families who want to thrive in the city’s dynamic market.",
      price: "2.3M AED",
      buttonText: "Find Dream Projects",
      images: [
        "/imgs/Townhouse-4.webp",
        "/imgs/Townhouse-3.webp",
        "/imgs/Townhouse-1.webp",
        "/imgs/Townhouse-2.webp",
        "/imgs/Townhouse-7.webp",
        "/imgs/Townhouse-6.webp",
        "/imgs/Townhouse-5.webp",
      ],
      reverse: true,
    },
    {
      title: " Invest in Waterfront Residence",
      description:
        "Experience Dubai’s finest coastal living with Asgard Real Estate. Our exclusive beach residences feature contemporary design, breathtaking water views, and direct access to the shore—offering sophistication, comfort, and world-class amenities in every detail.",
      price: "1.4M AED",
      buttonText: "Find Dream Projects",
      images: [
        "/imgs/Beach-Residence-3.webp",
        "/imgs/Beach-Residence-2.webp",
        "/imgs/Beach-Residence-1.webp",
        "/imgs/Beach-Residence-4.webp",
        "/imgs/Beach-Residence-5.webp",
        "/imgs/Beach-Residence-6.webp",
        "/imgs/Beach-Residence-7.webp",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 relative px-4 pb-6 min-h-[200vh]">
      {sections.map((sec, i) => (
        <PropertySection key={i} {...sec} index={i} />
      ))}
    </section>
  );
};

export default ServicesSection2;

// Add this CSS to your global styles or use a CSS-in-JS solution
const styles = `
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);