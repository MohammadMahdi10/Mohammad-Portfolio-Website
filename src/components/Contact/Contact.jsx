import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="Contact" className="contact-section">
      <p className="contact-subtitle">Get In Touch</p>

      <h1>Let's Work Together</h1>

      <p className="contact-description">
        I'm open to new opportunities and exciting projects. Whether you have a
        question, an idea you'd like to discuss, or simply want to connect, feel
        free to reach out.
      </p>

      <div className="contact-links">
        <a
          href="mailto:mohammadalimahdi26@gmail.com"
          className="contact-card"
          aria-label="Email"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/mohammad-mahdi-57918032b/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="Mohammad_CV_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          aria-label="Download CV"
        >
          <FaFileAlt />
          <span>CV</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;