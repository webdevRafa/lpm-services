import React, { useEffect, useRef } from "react";

export const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.2; // Adjust for speed (higher = faster)
    const itemWidth = slider.scrollWidth / 2; // Half of the total width

    function scroll() {
      if (!slider) return;
      scrollAmount += scrollSpeed;

      // Reset scroll position ONLY when it has fully looped
      if (scrollAmount >= itemWidth) {
        scrollAmount = 0; // Reset without abrupt jump
      }

      slider.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(scroll);
    }

    requestAnimationFrame(scroll);
  }, []);

  return (
    <div className="w-full overflow-hidden py-20 px-10 relative">
      <div ref={sliderRef} className="flex w-max gap-5">
        {/* Render elements twice to create seamless looping */}
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex gap-5">
            <div className="min-w-[300px] max-w-[600px] h-[300px] bg-blue-50 hover:scale-110 transition duration-300"></div>
            <div className="min-w-[300px] max-w-[600px] h-[300px] bg-blue-100 hover:scale-110 transition duration-300"></div>
            <div className="min-w-[300px] max-w-[600px] h-[300px] bg-blue-200 hover:scale-110 transition duration-300"></div>
            <div className="min-w-[300px] max-w-[600px] h-[300px] bg-blue-300 hover:scale-110 transition duration-300"></div>
            <div className="min-w-[300px] max-w-[600px] h-[300px] bg-blue-400 hover:scale-110 transition duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
