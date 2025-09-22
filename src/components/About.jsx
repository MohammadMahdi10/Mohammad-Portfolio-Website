const About = () => {
  const skills = [
    "Web Development",
    "Programming",
    "Software Life Cycle",
    "Machine Learning",
    "Version Control"
  ]

  {/* About Me Section */}
  return (
    <div id="About" className="mt-52 px-6 scroll-mt-50 ">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-5xl font-bold mb-8 dark:text-blue-400">A Few Words About Me</h1>

        <p className="text-m text-gray-700 md:text-[1.1rem] mb-6 md:w-140 dark:text-gray-200">
          I'm a Computer Science student based in London, passionate about software development and learning new technologies.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6 text-l md:text-[1.1rem] md:w-160">
          <span className="flex items-center gap-2">
            <span>•</span>
            <span className="font-semibold">I'm good at:</span>
          </span>
          {skills.map(skill => (
            <span key={skill} className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 text-green-700 font-extrabold">
                ✓
              </span>
              <span>{skill}</span>
            </span>
          ))}
        </div>

        <p className="text-lg md:text-l mb-6 md:w-185 text-gray-500 mt-5 dark:text-gray-100">
        I specialise in software engineering, machine learning and web development, with a strong foundation in computer science fundamentals. 
        I enjoy solving complex problems, building efficient applications, and collaborating on innovative projects. 
        If you're looking for a passionate developer eager to learn and grow, let's connect!
        </p>

        <div className="flex justify-center gap-4 mt-3 mb-26">
          <button onClick={() => document.getElementById("Projects").scrollIntoView({ behavior: "smooth" })} 
          className="bg-[#fbf7f6] text-black font-semibold px-6 py-2 cursor-pointer hover:bg-[#f2eae8] duration-300
          dark:bg-[#385796] dark:text-white dark:hover:bg-[#4b78d2]">My Projects</button>
          <button onClick={() => window.open("/Mo CV.pdf", "_blank")}
          className="border-[0.13rem] border-black dark:border-white font-semibold px-6 py-2 cursor-pointer dark:hover:bg-white 
          hover:bg-black hover:text-white dark:hover:text-gray-900 
          duration-300 hover:border-black dark:hover:border-white">Download CV</button>
        </div>
      </div>
    </div>
  )
}

export default About
