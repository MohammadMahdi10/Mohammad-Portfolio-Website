import { FaArrowRight } from "react-icons/fa";
import "./Intro.css";

const Intro = () => {
  return (
    <section id="Home" className="intro-wrapper">
      <div className="intro-section">
        <div className="intro-content">
          <div className="intro-text">
            <p className="intro-heading">
              Hey There! My name is
            </p>

            <h1 className="intro-name">
              Mohammad Mahdi
            </h1>

            <p className="intro-description">
              Enthusiastic about software engineering, full stack web applications
              and problem solving. Constantly learning new technologies to build
              efficient solutions.
            </p>

            <div className="intro-buttons">
              <a href="#Projects" className="intro-primary-btn">
                View Projects
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;