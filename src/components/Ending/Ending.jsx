import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import "./Ending.css";

const Ending = () => {
  return (
    <div className="ending-section">
      <div className="ending-content">
        <div className="ending-info">
          <h1>
            <a href="#Home">Mohammad Sabur Ali Mahdi</a>
          </h1>

          <p>
            Future Software Engineer passionate about building intelligent systems
            and dynamic web applications.
          </p>

          <ul className="ending-links">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Experience">Experience</a></li>
            <li><a href="#Education">Education</a></li>
            <li><a href="#Projects">Projects</a></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="ending-bottom">
        <p>Copyright 2025 © Mohammad Sabur Ali Mahdi - All Rights Reserved.</p>

        <div className="ending-icons">
          <a
            href="https://github.com/MohammadMahdi10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={26} />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammad-mahdi-57918032b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={26} />
          </a>

          <a href="/Mo CV.pdf" target="_blank" rel="noopener noreferrer">
            <FaFileAlt size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ending;