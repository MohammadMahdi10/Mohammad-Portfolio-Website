import React, { useEffect, useRef, useState } from "react";
import "./TimeLine.css";

const TimeLine = ({ desktopHeight = 820, mobileHeight = 700 }) => {
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startOffset = windowHeight * 0.5;

      let progress = 0;

      if (rect.top < startOffset && rect.bottom > 0) {
        progress = Math.min(rect.height, startOffset - rect.top);
      } else if (rect.top >= startOffset) {
        progress = 0;
      } else if (rect.bottom <= 0) {
        progress = rect.height;
      }

      setLineHeight(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = document.documentElement.classList.contains("dark");

  const lineBackground = containerRef.current
    ? `linear-gradient(
        to bottom,
        ${isDark ? "#3B82F6" : "#EC4899"} 0%,
        ${isDark ? "#9333EA" : "#FBCFE8"} ${Math.max(
          ((lineHeight - 20) / containerRef.current.offsetHeight) * 100,
          0
        )}%,
        ${isDark ? "#9333EA" : "#FBCFE8"} 100%
      )`
    : isDark
    ? "#3B82F6"
    : "#EC4899";

  return (
    <div
      ref={containerRef}
      className="timeline-container"
      style={{
        "--mobile-height": `${mobileHeight}px`,
        "--desktop-height": `${desktopHeight}px`,
      }}
    >
      <div className="timeline-base-line"></div>

      <div
        className="timeline-progress-line"
        style={{
          height: `${lineHeight}px`,
          background: lineBackground,
        }}
      ></div>
    </div>
  );
};

export default TimeLine;