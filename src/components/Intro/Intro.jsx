import assets from "../../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import "./Intro.css";

const Intro = () => {
  return (
    <div id="Home" className="intro-wrapper">
      <div className="intro-section">
        <div className="intro-content">
          <div className="intro-image-container">
            <img
              className="intro-image"
              src={assets.Mo_Face}
              alt="About me"
            />
          </div>

          <div className="intro-text">
            <h1 className="intro-greeting">Hey There!</h1>

            <h1 className="intro-name">My name is Mohammad Mahdi.</h1>

            <hr />

            <p>
              Future Software Engineer passionate about building intelligent
              systems and dynamic web applications.
            </p>

            <a href="#Contact" className="intro-contact-link">
              <span>Contact Me</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
