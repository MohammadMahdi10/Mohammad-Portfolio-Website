import "./Contact.css"

const Contact = ({ openContactForm }) => {
  return (
    <section id="Contact" className="contact-section">
      <p className="contact-subtitle">Get In Touch</p>

      <h1>Let's Work Together</h1>

      <p className="contact-description">
        I'm open for new opportunities – especially ambitious or large projects.
        However, my inbox is always open. Whether you have a question or just
        want to say hi, I'll try my best to get back to you!
      </p>

      <button onClick={openContactForm} className="contact-btn">
        Contact Me
      </button>
    </section>
  )
}

export default Contact