import React, { useState } from 'react';
import assets from '../assets/assets';
import ThemeToggleBtn from './ThemeToggleBtn';
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';

const Navbar = ({theme, setTheme, contactFormOpen, openContactForm, closeContactForm }) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [notification, setNotification] = useState({ message: '', type: '' });

  {/* Navbar Section */}
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-20 py-4 sticky top-0 z-50 backdrop-blur-x1 font-medium 
    bg-white dark:bg-gray-900'>

      <h1 className="w-40 sm:w-40 whitespace-nowrap text-2xl font-medium text-black dark:text-white"><a href="#Home">Mohammad Sabur Ali Mahdi</a></h1>

      {/* Navbar For Mobile & Desktop */}
      <div className={`text-gray-700 dark:text-white sm:text-sm 
        ${sidebarOpen ? 'max-sm:w-60 max-sm:pl-10' : 'max-sm:w-0 overflow-hidden'}
        max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col 
        max-sm:bg-gray-800 max-sm:shadow-2xl max-sm:shadow-black/90 max-sm:text-white max-sm:pt-20
        flex sm:items-center gap-5 ml-25 transition-all duration-500 ease-in-out`}>

        <FiX className="w-7 h-7 absolute right-4 top-4 sm:hidden"
        onClick={()=> setSidebarOpen(false)}/>

        <a
          onClick={() => setSidebarOpen(false)}
          href="#Home"
          className="relative text-black dark:text-white max-sm:text-white transition-colors duration-300 hover:text-pink-500 dark:hover:text-blue-400 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-pink-500 dark:after:bg-blue-400
          after:transition-all after:duration-300
          hover:after:w-full">Home</a>

        <span className="hidden md:inline">|</span>

        <a
          onClick={() => setSidebarOpen(false)}
          href="#About"
          className="relative text-black dark:text-white max-sm:text-white transition-colors duration-300 hover:text-pink-500 dark:hover:text-blue-400
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:w-0 after:h-[2px] after:bg-pink-500 dark:after:bg-blue-400
            after:transition-all after:duration-300
            hover:after:w-full">About</a>

        <span className="hidden md:inline">|</span>

        <a
          onClick={() => setSidebarOpen(false)}
          href="#Experience"
          className="relative text-black dark:text-white max-sm:text-white transition-colors duration-300 hover:text-pink-500 dark:hover:text-blue-400
          after:content-[''] after:absolute after:left-0 after:bottom-0
          after:w-0 after:h-[2px] after:bg-pink-500 dark:after:bg-blue-400
          after:transition-all after:duration-300 hover:after:w-full">Experience</a>

        <span className="hidden md:inline">|</span>

        <a
          onClick={() => setSidebarOpen(false)}
          href="#Education"
          className="relative text-black dark:text-white max-sm:text-white transition-colors duration-300 hover:text-pink-500 dark:hover:text-blue-400
          after:content-[''] after:absolute after:left-0 after:bottom-0
          after:w-0 after:h-[2px] after:bg-pink-500 dark:after:bg-blue-400
          after:transition-all after:duration-300 hover:after:w-full">Education</a>

        <span className="hidden md:inline">|</span>

        <a
          onClick={() => setSidebarOpen(false)}
          href="#Projects"
          className="relative text-black dark:text-white max-sm:text-white transition-colors duration-300 hover:text-pink-500 dark:hover:text-blue-400
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:w-0 after:h-[2px] after:bg-pink-500 dark:after:bg-blue-400
            after:transition-all after:duration-300 hover:after:w-full">Projects</a>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>

        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt=""
        onClick={() => setSidebarOpen(true)} className='w-8 sm:hidden'/>

        <a onClick={openContactForm} className='text-sm max-sm:hidden flex items-center gap-2 bg-pink-600 dark:bg-[#385796] font-extrabold text-white px-6
        py-2 rounded-lg cursor-pointer hover:scale-103 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/50 dark:hover:shadow-blue-900/50'>
          Contact Me <img src={assets.arrow_icon} width={14} alt=""/>
        </a>
      </div>

      {/* Contact Form */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div  
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div  
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8 , opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 200, duration: 0.8 }}
              className="bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300">Get In Touch</h1>
                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-gray-300 font-extrabold cursor-pointer"/>
                </button>
              </div>

              {/* Form with EmailJS */}
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  emailjs.sendForm(
                    'service_v8u4q3m',
                    'template_5d6cqpa',
                    e.target,
                    'FjCXS_9ObudM7bhXs'
                  ).then((result) => {
                    console.log(result.text);
                    setNotification({ message: 'Message sent successfully!', type: 'success' });
                    closeContactForm();
                    e.target.reset();

                    // Hide notification after 3 seconds
                    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
                  }, (error) => {
                    console.log(error.text);
                    setNotification({ message: 'Failed to send message. Please try again.', type: 'error' });
                    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
                  });
                }}
              >

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2
                    focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-gray-100"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email Address"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2
                    focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-gray-100"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2
                    focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-gray-100"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    id="message"
                    placeholder="Enter Your Message"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2
                    focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-gray-100"
                    required
                  />
                </div>

                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-gradient-to-r dark:from-pink-600 dark:to-pink-400 from-blue-700 to-purple-700 hover:from-blue-600 
                  hover:to-purple-600 dark:hover:from-pink-700 dark:hover:to-pink-500 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg
                  dark:hover:shadow-pink-600/50 hover:shadow-violet-600/50 text-white cursor-pointer"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Notification */}
      <AnimatePresence>
        {notification.message && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-white ${
              notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Navbar