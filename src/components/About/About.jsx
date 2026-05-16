import "./About.css"

const About = () => {
  const skills = [
    "Web Development",
    "Programming",
    "Software Life Cycle",
    "Machine Learning",
    "Version Control"
  ]

  return (
    <div id="About" className="about-section">
      <div className="about-container">
        <h1>A Few Words About Me</h1>

        <p className="about-intro">
          I'm a Computer Science student based in London, passionate about software development and learning new technologies.
        </p>

        <div className="skills-list">
          <span className="skills-heading">
            <span>•</span>
            <span>I'm good at:</span>
          </span>

          {skills.map(skill => (
            <span key={skill} className="skill-item">
              <span className="checkmark">✓</span>
              <span>{skill}</span>
            </span>
          ))}
        </div>

        <p className="about-description">
          I specialise in software engineering, machine learning and web development, with a strong foundation in computer science fundamentals.
          I enjoy solving complex problems, building efficient applications, and collaborating on innovative projects.
          If you're looking for a passionate developer eager to learn and grow, let's connect!
        </p>

        <div className="about-buttons">
          <button
            onClick={() => document.getElementById("Projects").scrollIntoView({ behavior: "smooth" })}
            className="projects-btn"
          >
            My Projects
          </button>

          <button
            onClick={() => window.open("/Mo CV.pdf", "_blank")}
            className="cv-btn"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  )
}

export default About