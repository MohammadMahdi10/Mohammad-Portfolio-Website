import React, { useState, useEffect, useRef } from "react";

{/* Typewriter Section */}
const TypewriterText = ({ text = "", speed = 100, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  const spanRef = useRef(null);
  const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const scrollDir = useRef("down");

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY || 0;
      if (current > lastScrollY.current) 
      {
        scrollDir.current = "down";
      }
      else if (current < lastScrollY.current)
      {
        scrollDir.current = "up";
      }
        lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const startTyping = () => {
      setDisplayedText("");
      setIndex(0);
      setIsTyping(true);
      setHasTyped(true);
    };

    {/* Typewrite Management */}
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (scrollDir.current === "down") 
          {
            startTyping();
          } 
          else if (!hasTyped) 
          {
            setDisplayedText(text);
            setIndex(text.length);
            setHasTyped(true);
          }
        }
      },
      { threshold: 0.35 }
    );

    {/* Reload Typewrite Management */}
    if (spanRef.current) 
    {
      observer.observe(spanRef.current);

      if (spanRef.current.getBoundingClientRect().top < window.innerHeight) 
      {
        if (lastScrollY.current > spanRef.current.getBoundingClientRect().bottom) 
        {
          setDisplayedText(text);
          setIndex(text.length);
          setHasTyped(true);
        } 
        else 
        {
          startTyping();
        }
      }
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [text, hasTyped]);

  {/* Typewrite Effect */}
  useEffect(() => {
    if (!isTyping) return;

    if (index < text.length) 
    {
      const t = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(t);
    } 
    else 
    {
      setIsTyping(false);
    }
  }, [index, isTyping, text, speed]);

  return (
    <span ref={spanRef} className={`${className} whitespace-pre`}>
      {displayedText}
      {isTyping && <span className="ml-1 border-r-4 border-current animate-blink" />}
    </span>
  );
};

export default function MyComponent() {
  return (
    <TypewriterText
      text="My Journey"
      speed={150}
      className="text-[#e07b7b] dark:text-blue-400 text-7xl block mt-2"
    />
  );
}
