import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import assets from '../assets/assets';
import { FaGithub } from "react-icons/fa";

{/* Project Section */}
const Project = ({ theme }) => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const titleLineRef = useRef(null)
    const triggerRef = useRef(null)

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
            overlayTags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design", "Frontend Development"],
            youtube: "",
            gitHub: ""
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
                "Replayability: Randomized dungeon layouts and enemy placements keep each run fresh and challenging."
            ],
            overlayTags: ["Godot", "GDScript", "2D Game"],
            youtube: "https://www.youtube.com/watch?v=HXmxu-tvXWY",
            gitHub: "https://github.com/MohammadMahdi10/Tales-of-the-Dungeon"
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
            overlayTags: ["Python", "PyGame", "2D Game", "Game Replayability", "Level Selection", "Software Lifecycle (Agile)"],
            youtube: "https://www.youtube.com/watch?v=hfcUo_NBVt8",
            gitHub: ""
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
            gitHub: "https://github.com/MohammadMahdi10/Full-Stack-Portfolio-Website"
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
            overlayTags: ["Java", "JFrame", "OOP", "Simulation", "Custom Tracks", "Horse Racing"],
            youtube: "https://www.youtube.com/watch?v=i5nXF1HZxJk",
            gitHub: "https://github.com/MohammadMahdi10/HorseRaceSimulator"
        }
    ];

    {/* Overlay State Management */}
    const initialOverlayState = projectImages.reduce((acc, project) => {
        acc[project.id] = false;
        return acc;
    }, {});
    const [activeOverlay, setActiveOverlay] = useState(initialOverlayState);

    const handleOverlayToggle = (id) => {
        setActiveOverlay(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            titleRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
              scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" } }
        );
        gsap.fromTo(
            titleLineRef.current,
            { width: "0%", opacity: 0 },
            { width: "100%", opacity: 1, duration: 1.5, ease: "power3.inOut", delay: 0.3,
              scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" } }
        );
        gsap.fromTo(
            triggerRef.current,
            { rotationX: 20, opacity: 0 },
            { rotationX: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2,
              scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" } }
        );
        gsap.fromTo(
            sectionRef.current,
            { backgroundPosition: "50% 0%" },
            { backgroundPosition: "50% 100%", ease: "none",
              scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true } }
        );

        const projects = gsap.utils.toArray(".project-card");
        projects.forEach((project) => {
            gsap.fromTo(
                project,
                { opacity: 0, y: 100, scale: 0.95 },
                { opacity: 1, y: 0, rotate: 0, scale: 1, duration: 1, ease: "power3.out",
                  scrollTrigger: { trigger: project, start: "top 70%", toggleActions: "play none none reverse" }}
            );
        });
    }, []);

    useEffect(() => {
        projectImages.forEach((project) => {
            const titleEl = overlayTitleRefs.current[project.id];
            const textEl = overlayTextRefs.current[project.id];
            const specialTextEl = overlayTextRefs.current[`specialText${project.id}`];

            if (activeOverlay[project.id]) {
                if (titleEl) {
                    gsap.fromTo(titleEl,
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
                    );
                }

                if (textEl) {
                    gsap.fromTo(textEl,
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.2 }
                    );
                }

                if (specialTextEl) {
                    gsap.fromTo(specialTextEl,
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.15 }
                    );
                }
            }
        });
    }, [activeOverlay]);

    {/* Project Section */}
    return (
        <section ref={sectionRef} id="Projects" className="relative py-40 bg-white dark:bg-gray-900 overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-4 mb-16 relative z-10">
                <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0 dark:text-white">Featured Projects</h2>
                <div ref={titleLineRef} className="w-0 h-1 bg-gradient-to-r from-pink-500 to-pink-200 mx-auto opacity-0 dark:from-blue-500 dark:to-purple-500"/>
            </div>

            <div ref={triggerRef} className="flex flex-col gap-20 opacity-0">
                {projectImages.map((project) => (
                    <div key={project.id} className="project-card relative flex flex-col items-center justify-center pb-12">
                        <h2 className="projectTitle text-2xl md:text-3xl font-bold text-black mb-4 flex items-center gap-2">
                          
                          {/* Project Title : YouTube link */}
                          <span
                            className={`hover:text-gray-400 transition-colors duration-300 mt-30 dark:text-white cursor-pointer 
                                ${!project.youtube ? "pointer-events-none opacity-70" : ""}`}
                            onClick={() => {
                              if (project.youtube) window.open(project.youtube, "_blank");
                            }}
                          >
                            {project.title}
                          </span>

                          {/* GitHub Icon : GitHub link */}
                            <FaGithub
                            className={`w-6 h-6 inline-block cursor-pointer mt-30 transition-colors duration-300
                                ${theme === "dark" ? "text-white" : "text-black"} 
                                ${project.gitHub ? "hover:text-gray-400" : "pointer-events-none opacity-50"}`}
                            onClick={() => {
                                if (project.gitHub) window.open(project.gitHub, "_blank");
                            }}
                            />

                        </h2>

                        <div className="relative w-full max-w-3xl mb-6">

                            {/* Toggle button */}
                            <button
                                onClick={() => handleOverlayToggle(project.id)}
                                className="absolute top-2 right-2 md:top-3 md:right-4 md:left-2 md:right-auto z-50 bg-white rounded-full p-2 shadow-xl hover:bg-gray-200
                                transition-colors duration-300 hover:cursor-pointer"
                                aria-label="Toggle overlay"
                            >
                                <img src={assets.menu_icon} alt="Info" className="w-6 h-6" />
                            </button>

                            {/* Project image (visible when overlay closed) */}
                            <img
                                className={`projectImage w-full rounded-2xl object-cover shadow-md border border-gray-700 transition-all duration-700 ease-in-out
                                ${activeOverlay[project.id] ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
                                src={project.imageSrc}
                                alt="Project-img"
                            />

                            {/* Overlay image (visible when overlay open) */}
                            <img
                                className={`absolute inset-0 w-full h-full rounded-2xl object-cover shadow-md border border-gray-700 transition-all duration-700 ease-in-out
                                ${activeOverlay[project.id] ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                                src={theme === 'dark' ? "/Overlay_dark.png" : "/Overlay.png"}
                                alt="Overlay-img"
                            />

                            {/* Overlay text content */}
                            {activeOverlay[project.id] && (
                                <div className="absolute inset-0 z-40 flex flex-col items-start p-6 pointer-events-auto">
                                <h3
                                    ref={(el) => (overlayTitleRefs.current[project.id] = el)}
                                    className={`text-xl md:text-2xl font-semibold md:ml-20 md:mt-3 ${project.id !== 1 ? "mb-3" : ""} text-black dark:text-white`}
                                >
                                    {project.overlayTitle}
                                </h3>

                                {project.id === 1 && (
                                    <p
                                    ref={(el) => (overlayTextRefs.current[`specialText${project.id}`] = el)}
                                    className="text-sm text-gray-600 dark:text-gray-400 mb-3 md:ml-20"
                                    >
                                    The one you're currently viewing!
                                    </p>
                                )}

                                <div
                                    ref={(el) => (overlayTextRefs.current[project.id] = el)}
                                    className="text-gray-700 mb-4"
                                >
                                    <ul className="list-disc list-outside pl-8 space-y-1 w-140 text-[0.82rem] md:text-base md:ml-19">
                                    {project.overlayDescription.map((item, idx) => (
                                        <li key={idx} className="leading-relaxed dark:text-gray-200">{item}</li>
                                    ))}
                                    </ul>
                                </div>
                                </div>
                            )}
                            </div>

                            {/* Overlay Tags (always visible) */}
                            <div className="flex flex-wrap gap-2 -mt-2">
                                {project.overlayTags.map((tag, i) => (
                                    <span
                                    key={i}
                                    className="px-3 py-1 text-sm rounded-full bg-[#1c2541] text-gray-200"
                                    >
                                    {tag}
                                    </span>
                                ))}
                            </div>


                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Project;
