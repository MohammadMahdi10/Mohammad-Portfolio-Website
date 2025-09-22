import React, { useEffect, useRef, useState } from "react";

{/* Animated TimeLine Section */}
const TimeLine = () => {
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    {/* Animation With Scroll */}
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startOffset = windowHeight * 0.5;

      let progress = 0;

      if (rect.top < startOffset && rect.bottom > 0) 
      {
        progress = Math.min(rect.height, startOffset - rect.top);
      } 
      else if (rect.top >= startOffset) 
      {
        progress = 0;
      } 
      else if (rect.bottom <= 0) 
      {
        progress = rect.height;
      }

      setLineHeight(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative md:min-h-[700px] min-h-[800px]">

      <div className="absolute md:left-32 left-8 top-0 bottom-0 w-1 bg-black rounded-md"></div>

      <div
        className="absolute md:left-32 left-8 top-0 w-1 rounded-md transition-none dark:mix-blend-lighten"
        style={{
          height: `${lineHeight}px`,
          background: containerRef.current
            ? `linear-gradient(
                to bottom,
                ${
                  document.documentElement.classList.contains("dark")
                    ? "#3B82F6"
                    : "#EC4899"
                } 0%, 
                ${
                  document.documentElement.classList.contains("dark")
                    ? "#9333EA"
                    : "#FBCFE8"
                } ${Math.max(
                  (lineHeight - 20) / containerRef.current.offsetHeight * 100,
                  0
                )}%, 
                ${
                  document.documentElement.classList.contains("dark")
                    ? "#9333EA"
                    : "#FBCFE8"
                } 100%
              )`
            : document.documentElement.classList.contains("dark")
            ? "#3B82F6"
            : "#EC4899", 
        }}
      ></div>
    </div>
  );
};

export default TimeLine;
