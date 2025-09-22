import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"

{/* Ending Section */}
const Ending = () => {
  return (
    <div className='dark:bg-gray-900 pt-10 sm:pt-10 px-4 sm:px-10 lg:px-24 xl:px-40'>
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
            <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                <h1 className="w-40 sm:w-40 whitespace-nowrap text-2xl font-medium text-black dark:text-white"><a href="#Home">Mohammad Sabur Ali Mahdi</a></h1>
                <p className='max-w-md dark:text-gray-200'>Future Software Engineer passionate about building intelligent systems and dynamic web applications.</p>

                <ul className='flex gap-8 text-md dark:text-gray-200'>
                    <li><a
                      href="#Home"
                      className="
                        text-black dark:text-white
                        transition-colors duration-300
                        hover:text-pink-500 dark:hover:text-blue-400
                      "
                    >
                      Home</a></li>
                    <li><a
                      href="#About"
                      className="
                        text-black dark:text-white
                        transition-colors duration-300
                        hover:text-pink-500 dark:hover:text-blue-400
                      "
                    >
                      About</a></li>
                    <li><a
                      href="#Experience"
                      className="
                        text-black dark:text-white
                        transition-colors duration-300
                        hover:text-pink-500 dark:hover:text-blue-400
                      "
                    >
                      Experience</a></li>
                    <li><a
                      href="#Education"
                      className="
                        text-black dark:text-white
                        transition-colors duration-300
                        hover:text-pink-500 dark:hover:text-blue-400
                      "
                    >
                      Education</a></li>
                    <li><a
                      href="#Projects"
                      className="text-black dark:text-white transition-colors duration-300 hover:text-pink-500 dark:hover:text-blue-400">Projects</a></li>
                </ul>

            </div>
        </div>
      <hr className='border-gray-300 dark:border-gray-600 my-6'/>

      {/* Icons */}
      <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
        <p className='dark:text-gray-300' >Copyright 2025 © Mohammad Sabur Ali Mahdi - All Rights Reserved.</p>
        <div className="flex items-center justify-between gap-4">
          <a 
            href="https://github.com/MohammadMahdi10" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors duration-300 dark:text-gray-400"
          >
            <FaGithub size={26} />
          </a>

          <a 
            href="https://www.linkedin.com/in/mohammad-mahdi-57918032b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors duration-300 dark:text-gray-400"
          >
            <FaLinkedin size={26} />
          </a>

          <a 
            href="/Mo CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors duration-300 dark:text-gray-400"
          >
            <FaFileAlt size={24} />
          </a>

        </div>
      </div>
    </div>
  )
}

export default Ending
