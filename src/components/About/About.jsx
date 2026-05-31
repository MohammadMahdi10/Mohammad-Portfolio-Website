import "./About.css";

const About = () => {
  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "React",
    "SQL",
    "Machine Learning",
    "Git",
    "Web Development",
  ];

  return (
    <div id="About" className="about-section">
      <div className="about-container">
        <h1>A Few Words About Me</h1>

        <p className="about-description">
          I'm a Computer Science student based in London with a strong interest
          in software engineering, machine learning, and modern web development.
        </p>

        <p className="about-description">
          I enjoy solving problems, building clean applications, and learning
          new technologies through practical projects and real-world experience.
        </p>

        <div className="about-skills">
          <h2>Technical Skills</h2>

          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-item">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;