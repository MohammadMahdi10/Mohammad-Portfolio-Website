import React, { useRef, useEffect } from "react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimeLine from "./TimeLine";

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

{/* Card Pop Up & Swipe */}
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
    <div
      ref={sectionRef}
      id="Education" className="dark:bg-gray-900 text-gray-100 flex flex-col items-center py-12 mt-20 scroll-mt-20"
    >
      {/* Animated Title */}
      <div className="w-full flex flex-col items-center mb-8 mt-20">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0 dark:text-white"
        >
          Education
        </h2>
        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-pink-500 to-pink-200 mx-auto opacity-0 mb-25 dark:from-blue-500 dark:to-purple-500"
        />
      </div>

      <div className="relative w-full max-w-5xl">
        <TimeLine />

        {/* Array To Card */}
        <div className="absolute top-5 left-0 w-full">
          {Object.entries(education)
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
                <div className="flex flex-col w-full md:w-153 md:w-258 gap-8 pl-13 md:pl-40"> 
                  {items.map((exp, index) => {
                    const Icon = exp.icon;
                    return (
                      <RevealCard key={index} delay={index * 0.05}>
                        <div className="bg-[#fae9e5] dark:bg-gray-800 p-6 rounded-md shadow-lg flex items-start gap-4 text-gray-900 dark:text-gray-100">
                          <div
                            className={`flex items-center justify-center rounded-xl bg-[#e07a7f] dark:bg-[#50a1fe]
                              ${year === "2022" ? "w-[2.5rem] h-[4.2rem]" : "w-16 h-16"}`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.date}</p>
                          <div className="text-gray-700 dark:text-gray-200 text-justify">{Array.isArray(exp.description) ? (<>{year === "2024" ? (<>
                              <p>{exp.description[0]}</p>
                              {exp.description.length > 1 && (<ul className="list-disc list-inside ml-4 mt-1">{exp.description.slice(1).map((item, idx) => (
                                <li key={idx}>{item}</li>))}</ul>)}</>) : (<ul className="list-disc list-inside ml-4 mt-1">{exp.description.map((item, idx) => (
                                <li key={idx}>{item}</li>))}
                              </ul>)}</>) : (exp.description)}
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
