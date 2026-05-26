import React, { useEffect, useRef, useState } from "react";
import "./TimeLine.css";

const TimeLine = () => {
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

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

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const progressPercent = containerRef.current
    ? Math.max(
        ((lineHeight - 20) / containerRef.current.offsetHeight) * 100,
        0
      )
    : 0;

  const lineBackground = `linear-gradient(
    to bottom,
    ${isDark ? "#3B82F6" : "#EC4899"} 0%,
    ${isDark ? "#9333EA" : "#FBCFE8"} ${progressPercent}%,
    ${isDark ? "#9333EA" : "#FBCFE8"} 100%
  )`;

  return (
    <div ref={containerRef} className="timeline-container">
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