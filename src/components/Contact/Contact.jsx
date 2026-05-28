import "./Contact.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="Contact" className="contact-section">
      <p className="contact-subtitle">Get In Touch</p>

      <h1>Let's Work Together</h1>

      <p className="contact-description">
        I'm open for new opportunities – especially ambitious or large projects.
        However, my inbox is always open. Whether you have a question or just
        want to say hi, I'll try my best to get back to you!
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
      </div>
    </section>
  );
};

export default Contact;