import React, { useRef, useEffect } from "react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimeLine from "./TimeLine";
import SubHeading from "./SubHeading";

const experiences = {
  2025: [
    {
      title: "AI Evaluator - Outlier",
      date: "January 2025 - Present",
      description:
        "In this role, I evaluate and rate responses from multiple AI models based on prompts, assessing clarity, correctness, and alignment with task objectives.",
      bullets: [
        "Reviewed AI outputs and identified logical errors",
        "Provided detailed feedback to users",
        "Collaborated to refine answers for consistency",
      ],
      icon: BriefcaseIcon,
    },
  ],
  2023: [
    {
      title: "Virtual Work Experience Trainee - Springpod",
      date: "Feburary 2023 - Feburary 2023",
      description:
        "I built a strong foundation in core technology concepts and essential industry skills.",
      bullets: [
        "Participated in interactive exercises",
        "Attended live webinars with professionals",
        "Applied learned concepts to practical scenarios",
      ],
      icon: BriefcaseIcon,
    },
  ],
};

const RevealCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden"
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
        className="absolute inset-0 bg-[#e07a7f] dark:bg-sky-500 z-30 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: delay + 0.1 }}
        className="relative z-20"
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

    // Title animation
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
    <div
      ref={sectionRef}
      id="Experience"
      className="dark:bg-[#161E2E] text-gray-100 flex flex-col items-center py-12 md:pb-20 pb-135 mt-20 bg-[#fbf7f6] scroll-mt-20"
    >
      <SubHeading />

      {/* Animated Title */}
      <div className="w-full flex flex-col items-center mb-8 mt-20">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0 dark:text-white"
        >
          Experience
        </h2>
        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-pink-500 to-pink-200 mx-auto opacity-0 md:mb-25 dark:from-blue-500 dark:to-purple-500"
        />
      </div>

      <div className="relative w-full max-w-5xl mt-25">
        <TimeLine desktopHeight = {820} mobileHeight = {800} />

        {/* Array To Card */}
        <div ref={triggerRef} className="absolute top-5 left-0 w-full">
          {Object.entries(experiences)
            .sort((a, b) => b[0] - a[0])
            .map(([year, items]) => (
              <div key={year} className="mb-20">
                <div className="relative flex items-center mb-10 pl-14 md:pl-40">
                  <div className="absolute left-[1.5rem] md:left-[7.5rem] w-5 h-5 bg-pink-300 dark:bg-[#50a1fe] rounded-full border-4 
                  border-gray-900 dark:border-gray-800"></div>
                  <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                    {year}
                  </span>
                </div>

                {/* Card Details */}
                <div className="flex flex-col w-[95%] max-w-lg md:w-[65rem] md:max-w-[80rem] gap-8 pl-10 md:pl-40 mx-auto">
                  {items.map((exp, index) => {
                    const Icon = exp.icon;
                    return (
                      <RevealCard key={index} delay={index * 0.05}>
                        <div className="bg-[#fae9e5] dark:bg-gray-800 p-6 rounded-md shadow-lg flex flex-col md:flex-row items-start gap-4 text-gray-900 dark:text-gray-100">
                          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#e07a7f] dark:bg-[#50a1fe]">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{exp.date}</p>
                            <p className="text-gray-700 dark:text-gray-200">{exp.description}</p>
                            <p className="font-bold mt-5">What I Gained:</p>
                            {/* Bullet points */}
                            {exp.bullets && (
                              <ul className="list-disc list-outside text-gray-700 dark:text-gray-200 pl-6 space-y-1">
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
