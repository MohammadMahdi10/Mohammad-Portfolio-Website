import React, { useRef, useEffect } from "react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimeLine from "../DynamicChanges/TimeLine/TimeLine";
import SubHeading from "../SubHeading/SubHeading";
import "./Experience.css";

const experiences = {
  2025: [
    {
      title: "Lab Demonstrator - Queen Mary University of London",
      date: "October 2025 - Present",
      description:
        "Supporting Year-1 labs (programming, debugging, tooling, documentation), explaining core CS concepts and best practices to students.",
      bullets: [
        "Supported 200+ students during lab sesssions",
        "Helped and marked 50+ lab reports and presentations",
        "Provided real time feedback to students to improve their understanding",
      ],
      icon: BriefcaseIcon,
    },
    {
      title: "AI Evaluator - Outlier",
      date: "January 2025 - Present",
      description:
        "Evaluated and rated responses from multiple AI models based on prompts, assessing clarity, correctness, and alignment with task objectives.",
      bullets: [
        "Evaluated AI-generated responses for accuracy, reasoning, and quality",
        "Improved 90% of reviewed AI responses to meet evaluation criteria",
        "Applied quality guidelines to identify logical and instruction following errors",
      ],
      icon: BriefcaseIcon,
    },
  ]
};

const RevealCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  return (
    <motion.div
      ref={ref}
      className="experience-reveal-card"
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
        className="experience-reveal-cover"
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: delay + 0.1 }}
        className="experience-reveal-content"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const triggerRef = useRef(null);

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
    <div ref={sectionRef} id="Experience" className="experience-section">
      <SubHeading />

      <div className="experience-title-container">
        <h2 ref={titleRef} className="experience-title">
          Experience
        </h2>

        <div ref={titleLineRef} className="experience-title-line" />
      </div>

      <div className="experience-timeline-wrapper">
        <TimeLine />

        <div ref={triggerRef} className="experience-content">
          {Object.entries(experiences)
            .sort((a, b) => b[0] - a[0])
            .map(([year, items]) => (
              <div key={year} className="experience-year-block">
                <div className="experience-year-header">
                  <div className="experience-year-dot"></div>
                  <span className="experience-year">{year}</span>
                </div>

                <div className="experience-cards">
                  {items.map((exp, index) => {
                    const Icon = exp.icon;

                    return (
                      <RevealCard key={index} delay={index * 0.05}>
                        <div className="experience-card">
                          <div className="experience-icon-box">
                            <Icon className="experience-icon" />
                          </div>

                          <div className="experience-card-content">
                            <h3>{exp.title}</h3>
                            <p className="experience-date">{exp.date}</p>
                            <p className="experience-description">
                              {exp.description}
                            </p>

                            <p className="experience-gained-title">
                              Achievements:
                            </p>

                            {exp.bullets && (
                              <ul className="experience-bullets">
                                {exp.bullets.map((point, i) => (
                                  <li key={i}>{point}</li>
                                ))}
                              </ul>
                            )}
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

export default Experience;