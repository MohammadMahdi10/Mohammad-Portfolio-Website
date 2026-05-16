import React, { useRef, useEffect } from "react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimeLine from "../TimeLine";
import "./Education.css";

const education = {
  2024: [
    {
      title: "Queen Mary University of London - MSci Computer Science",
      date: "September 2024 - June 2028",
      description: [
        "I am going into my second year of my Computer Science degree and have achieved a First Class in my first year. Here are some of the modules I have completed:",
        "Automata and Formal Languages (86.8%)",
        "Object Oriented Programming (85.8%)",
        "Professional and Research Practice (86%)",
        "Logic and Discrete Structures (83.6%)",
      ],
      icon: AcademicCapIcon,
    },
  ],
  2022: [
    {
      title: "The Bridge Academy - A Levels",
      date: "September 2022 - June 2024",
      description: ["Computer Science (A*)", "Mathematics (A*)", "Physics (A)"],
      icon: AcademicCapIcon,
    },
  ],
};

const RevealCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  return (
    <motion.div
      ref={ref}
      className="reveal-card"
      whileHover={{
        y: -4,
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.25)",
      }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <motion.div
        aria-hidden
        initial={{ scaleX: 1 }}
        animate={inView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1], delay }}
        style={{ transformOrigin: "right" }}
        className="reveal-cover"
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: delay + 0.1 }}
        className="reveal-content"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Education = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      titleLineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "92%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} id="Education" className="education-section">
      <div className="education-title-container">
        <h2 ref={titleRef} className="education-title">
          Education
        </h2>

        <div ref={titleLineRef} className="education-title-line" />
      </div>

      <div className="education-timeline-wrapper">
        <TimeLine desktopHeight={700} mobileHeight={700} />

        <div className="education-content">
          {Object.entries(education)
            .sort((a, b) => b[0] - a[0])
            .map(([year, items]) => (
              <div key={year} className="education-year-block">
                <div className="education-year-header">
                  <div className="education-year-dot"></div>
                  <span className="education-year">{year}</span>
                </div>

                <div className="education-cards">
                  {items.map((exp, index) => {
                    const Icon = exp.icon;

                    return (
                      <RevealCard key={index} delay={index * 0.05}>
                        <div className="education-card">
                          <div
                            className={`education-icon-box ${
                              year === "2022" ? "education-icon-box-tall" : ""
                            }`}
                          >
                            <Icon className="education-icon" />
                          </div>

                          <div className="education-card-content">
                            <h3>{exp.title}</h3>
                            <p className="education-date">{exp.date}</p>

                            <div className="education-description">
                              {Array.isArray(exp.description) ? (
                                exp.description.every((item) => item.length <= 30) ? (
                                  <ul>
                                    {exp.description.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  <>
                                    {exp.description.length > 0 && (
                                      <p>{exp.description[0]}</p>
                                    )}

                                    {exp.description.length > 1 && (
                                      <ul>
                                        {exp.description.slice(1).map((item, idx) => (
                                          <li key={idx}>{item}</li>
                                        ))}
                                      </ul>
                                    )}
                                  </>
                                )
                              ) : (
                                exp.description
                              )}
                            </div>
                          </div>
                        </div>
                      </RevealCard>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Education;