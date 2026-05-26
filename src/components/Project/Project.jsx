import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from "../../assets/assets";
import { FaGithub } from "react-icons/fa";
import "./Project.css";

const Project = ({ theme }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const triggerRef = useRef(null);
  const cardRef = useRef(null);

  const overlayTitleRefs = useRef({});
  const overlayTextRefs = useRef({});

  const projectImages = [
    {
      id: 1,
      title: "React & Tailwind Portfolio Website",
      imageSrc: "/ReactPortfolio.png",
      overlayTitle: "Modern Portfolio Website",
      overlayDescription: [
        "Responsive Design: Built with React and Tailwind CSS for a modern, fast, and mobile-friendly user experience.",
        "Component-Based Architecture: Modular React components make the website easy to maintain and extend.",
        "Interactive Features: Smooth animations, hover effects, and dynamic content enhance user engagement.",
        "State Management: Uses React state and props to manage interactive elements efficiently.",
        "Showcases Technical Skills: Highlights projects, coding abilities, and personal achievements.",
      ],
      overlayTags: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
        "Frontend Development",
      ],
      youtube: "",
      gitHub: "",
    },
    {
      id: 2,
      title: "Tales of the Dungeon",
      imageSrc: "/Tales of the Dungeon.png",
      overlayTitle: "2D Dungeon Crawler Game",
      overlayDescription: [
        "Objective-Based Progression: Players must complete specific goals in the game.",
        "Enemy Encounters: Engage in combat with enemies in each level, requiring players to strategise combat and resource management.",
        "Boss Battles: Each dungeon, at the end, culminates in a powerful boss fight, testing the player's skills.",
        "Dungeon Exploration: Players navigate through a map and can collect coins and potions.",
        "Replayability: Randomized dungeon layouts and enemy placements keep each run fresh and challenging.",
      ],
      overlayTags: ["Godot", "GDScript", "2D Game"],
      youtube: "https://www.youtube.com/watch?v=HXmxu-tvXWY",
      gitHub: "https://github.com/MohammadMahdi10/Tales-of-the-Dungeon",
    },
    {
      id: 3,
      title: "Cosmic Showdown",
      imageSrc: "/Cosmic Showdown.png",
      overlayTitle: "Hack and Slash Game",
      overlayDescription: [
        "Dynamic Combat: Enemies track and attack the player, and the player can attack enemies using strategic moves.",
        "Item Collection & In-Game Shop: Players can collect coins or points to purchase potions for healing or speed boosts.",
        "Multiple Enemy Types: Three enemy types with different difficulty levels to increase game challenge.",
        "Parallax Background & Platforming: Multi-layered scrolling background and platforms allow climbing and navigation.",
        "Audio Controls: Players can adjust music and sound effect volumes for a personalised experience.",
        "Enhanced Gameplay Mechanics: Combines real-time combat, collectibles, and level design for engaging gameplay.",
      ],
      overlayTags: [
        "Python",
        "PyGame",
        "2D Game",
        "Game Replayability",
        "Level Selection",
        "Software Lifecycle (Agile)",
      ],
      youtube: "https://www.youtube.com/watch?v=hfcUo_NBVt8",
      gitHub: "",
    },
    {
      id: 4,
      title: "Mohammad Full Stack Portfolio",
      imageSrc: "/Mohammad Full Stack Portfolio.png",
      overlayTitle: "Full Stack Portfolio Website",
      overlayDescription: [
        "Responsive Design: Built with HTML, CSS, and JavaScript to ensure smooth user experience across devices.",
        "Secure Login System: Users can register and log in safely, with session management handled in PHP.",
        "Dynamic Content: Blog posts and user data are stored and retrieved from a MySQL database.",
        "Server-Hosted: Runs on Apache server using XAMPP for local development and testing.",
        "Showcases Technical Skills: Highlights projects, coding abilities, and personal achievements.",
      ],
      overlayTags: ["HTML5", "CSS3", "JavaScript", "PHP", "Full Stack", "Apache"],
      youtube: "https://www.youtube.com/watch?v=WEIp9WuFg2s",
      gitHub: "https://github.com/MohammadMahdi10/Full-Stack-Portfolio-Website",
    },
    {
      id: 5,
      title: "Horse Racing Simulator",
      imageSrc: "/Horse.png",
      overlayTitle: "Dynamic Horse Racing Experience",
      overlayDescription: [
        "Java-based simulation using OOP principles and JFrame for GUI development.",
        "Customizable Race Tracks: Users can create tracks with different conditions (normal, icy, rainy) which dynamically affect horse speeds.",
        "Horse Customization: Multiple horse breeds, colors, and saddles, all influencing performance attributes like speed.",
        "Dynamic Racing: Each horse progresses in real-time based on individual stats and track conditions.",
        "Statistics & Comparisons: Horse performance stats are tracked, saved, and can be compared across races.",
        "Version Control: Project source code and updates are maintained on GitHub for version tracking.",
      ],
      overlayTags: [
        "Java",
        "JFrame",
        "OOP",
        "Simulation",
        "Custom Tracks",
        "Horse Racing",
      ],
      youtube: "https://www.youtube.com/watch?v=i5nXF1HZxJk",
      gitHub: "https://github.com/MohammadMahdi10/HorseRaceSimulator",
    },
  ];

  const initialOverlayState = projectImages.reduce((acc, project) => {
    acc[project.id] = false;
    return acc;
  }, {});

  const [activeOverlay, setActiveOverlay] = useState(initialOverlayState);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const currentProject = projectImages[currentProjectIndex];

  const handleOverlayToggle = (id) => {
    setActiveOverlay((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const changeProject = (direction) => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      x: direction === "next" ? -90 : 90,
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        setActiveOverlay(initialOverlayState);

        setCurrentProjectIndex((prev) => {
          if (direction === "next") {
            return prev === projectImages.length - 1 ? 0 : prev + 1;
          }

          return prev === 0 ? projectImages.length - 1 : prev - 1;
        });

        gsap.fromTo(
          cardRef.current,
          { x: direction === "next" ? 90 : -90, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.45, ease: "power3.out" }
        );
      },
    });
  };

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
        width: "100%",
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

    gsap.fromTo(
      triggerRef.current,
      { rotationX: 20, opacity: 0 },
      {
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      sectionRef.current,
      { backgroundPosition: "50% 0%" },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 100, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    const titleEl = overlayTitleRefs.current[currentProject.id];
    const textEl = overlayTextRefs.current[currentProject.id];
    const specialTextEl =
      overlayTextRefs.current[`specialText${currentProject.id}`];

    if (activeOverlay[currentProject.id]) {
      if (titleEl) {
        gsap.fromTo(
          titleEl,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        );
      }

      if (textEl) {
        gsap.fromTo(
          textEl,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.2 }
        );
      }

      if (specialTextEl) {
        gsap.fromTo(
          specialTextEl,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.15 }
        );
      }
    }
  }, [activeOverlay, currentProject.id]);

  return (
    <section ref={sectionRef} id="Projects" className="projects-section">
      <div className="projects-heading-container">
        <h2 ref={titleRef} className="projects-heading">
          Featured Projects
        </h2>

        <div ref={titleLineRef} className="projects-heading-line" />
      </div>

      <div ref={triggerRef} className="projects-list">
        <div className="project-carousel">
          <button
            className="project-arrow project-arrow-left"
            onClick={() => changeProject("prev")}
            aria-label="Previous project"
          >
            ‹
          </button>

          <div ref={cardRef} className="project-card">
            <h2 className="project-title">
              <span
                className={`project-title-link ${
                  !currentProject.youtube ? "project-disabled" : ""
                }`}
                onClick={() => {
                  if (currentProject.youtube) {
                    window.open(currentProject.youtube, "_blank");
                  }
                }}
              >
                {currentProject.title}
              </span>

              <FaGithub
                className={`project-github-icon ${
                  theme === "dark"
                    ? "project-github-dark"
                    : "project-github-light"
                } ${currentProject.gitHub ? "" : "project-disabled"}`}
                onClick={() => {
                  if (currentProject.gitHub) {
                    window.open(currentProject.gitHub, "_blank");
                  }
                }}
              />
            </h2>

            <div className="project-image-wrapper">
              <button
                onClick={() => handleOverlayToggle(currentProject.id)}
                className="project-overlay-btn"
                aria-label="Toggle overlay"
              >
                <img src={assets.menu_icon} alt="Info" />
              </button>

              <img
                className={`project-image ${
                  activeOverlay[currentProject.id]
                    ? "project-hidden"
                    : "project-visible"
                }`}
                src={currentProject.imageSrc}
                alt={currentProject.title}
              />

              <img
                className={`project-overlay-image ${
                  activeOverlay[currentProject.id]
                    ? "project-visible"
                    : "project-hidden"
                }`}
                src={theme === "dark" ? "/Overlay_dark.png" : "/Overlay.png"}
                alt="Overlay"
              />

              {activeOverlay[currentProject.id] && (
                <div className="project-overlay-content">
                  <h3
                    ref={(el) =>
                      (overlayTitleRefs.current[currentProject.id] = el)
                    }
                    className={`project-overlay-title ${
                      currentProject.id !== 1
                        ? "project-overlay-title-spaced"
                        : ""
                    }`}
                  >
                    {currentProject.overlayTitle}
                  </h3>

                  {currentProject.id === 1 && (
                    <p
                      ref={(el) =>
                        (overlayTextRefs.current[
                          `specialText${currentProject.id}`
                        ] = el)
                      }
                      className="project-special-text"
                    >
                      The one you're currently viewing!
                    </p>
                  )}

                  <div
                    ref={(el) =>
                      (overlayTextRefs.current[currentProject.id] = el)
                    }
                    className="project-overlay-text"
                  >
                    <ul>
                      {currentProject.overlayDescription.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="project-tags">
              {currentProject.overlayTags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>

          <button
            className="project-arrow project-arrow-right"
            onClick={() => changeProject("next")}
            aria-label="Next project"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;