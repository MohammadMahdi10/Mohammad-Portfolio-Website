const Contact = ({ openContactForm }) => {

  {/* Contacts Section */}
  return (  
    <section id="Contact" className="bg-[#fbf7f6] dark:bg-[#161E2E] flex flex-col items-center text-center py-30 px-6 relative">

      <p className="text-2xl mb-6 dark:text-gray-100">Get In Touch</p>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        Let's Work Together
      </h1>

      {/* Description */}
      <p className="max-w-[600px] text-base md:text-lg mb-8">
        I'm open for new opportunities – especially ambitious or large projects. 
        However, my inbox is always open. Whether you have a question or just 
        want to say hi, I'll try my best to get back to you!
      </p>

      <button onClick={openContactForm} className="border-[0.13rem] border-black dark:border-white font-semibold px-6 py-2 cursor-pointer dark:hover:bg-white 
      hover:bg-black hover:text-white dark:hover:text-gray-900 
      duration-300 hover:border-black dark:hover:border-white">Contact Me</button>

    </section>
  )
}

export default Contact
