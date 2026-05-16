import React, { useState, useEffect, useRef } from "react";
import "./TypeWriter.css";

const TypewriterText = ({ text = "", speed = 100, className = "" }) => {
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

      if (current > lastScrollY.current) {
        scrollDir.current = "down";
      } else if (current < lastScrollY.current) {
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (scrollDir.current === "down") {
            startTyping();
          } else if (!hasTyped) {
            setDisplayedText(text);
            setIndex(text.length);
            setHasTyped(true);
          }
        }
      },
      { threshold: 0.35 }
    );

    if (spanRef.current) {
      observer.observe(spanRef.current);

      if (spanRef.current.getBoundingClientRect().top < window.innerHeight) {
        if (lastScrollY.current > spanRef.current.getBoundingClientRect().bottom) {
          setDisplayedText(text);
          setIndex(text.length);
          setHasTyped(true);
        } else {
          startTyping();
        }
      }
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [text, hasTyped]);

  useEffect(() => {
    if (!isTyping) return;

    if (index < text.length) {
      const t = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((i) => i + 1);
      }, speed);

      return () => clearTimeout(t);
    }

    setIsTyping(false);
  }, [index, isTyping, text, speed]);

  return (
    <span ref={spanRef} className={`typewriter-text ${className}`}>
      {displayedText}
      {isTyping && <span className="typewriter-cursor" />}
    </span>
  );
};

export default function TypeWriter() {
  return (
    <TypewriterText
      text="My Journey"
      speed={150}
      className="typewriter-main"
    />
  );
}