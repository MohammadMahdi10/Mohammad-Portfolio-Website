import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./About.css";

const About = () => {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub"],
    },
    {
      title: "Interests",
      skills: ["Full Stack Development", "Software Engineering"],
    },
  ];

  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSkillGroup = () => {
    setDirection(1);
    setActiveSkillIndex((prev) =>
      prev === skillGroups.length - 1 ? 0 : prev + 1
    );
  };

  const prevSkillGroup = () => {
    setDirection(-1);
    setActiveSkillIndex((prev) =>
      prev === 0 ? skillGroups.length - 1 : prev - 1
    );
  };

  const activeGroup = skillGroups[activeSkillIndex];

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50,
      scale: 0.96,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -50 : 50,
      scale: 0.96,
    }),
  };

  return (
    <div id="About" className="about-section">
      <div className="about-container">
        <h1>A Few Words About Me</h1>

        <p className="about-description">
          I'm a Computer Science student at Queen Mary University of London with
          a passion for software engineering and full stack development. I enjoy
          building modern applications, solving challenging problems and
          continuously learning new technologies.
        </p>

        <p className="about-description">
          My interests span <strong>Java</strong>, <strong>Python</strong>,{" "}
          <strong>React</strong>, and <strong>Full Stack Development</strong>.
          I'm driven by curiosity, a desire to build meaningful software, and
          the opportunity to apply technology to real-world challenges.
        </p>

        <div className="about-skills">
          <h2>Technical Skills</h2>

          <div className="skills-slider">
            <button
              className="skills-arrow"
              onClick={prevSkillGroup}
              aria-label="Previous skill category"
            >
              ‹
            </button>

            <div className="skill-group-wrapper">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeSkillIndex}
                  className="skill-group"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                >
                  <h3>{activeGroup.title}</h3>

                  <div className="skills-list">
                    {activeGroup.skills.map((skill) => (
                      <span key={skill} className="skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              className="skills-arrow"
              onClick={nextSkillGroup}
              aria-label="Next skill category"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;