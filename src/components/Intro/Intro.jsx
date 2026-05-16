import assets from '../assets/assets';

{/* Intro Section */}
const Intro = ({ openContactForm }) => {
  return (
    <div id="Home" className="bg-white dark:bg-darkBack scroll-mt-90">
      <div className="bg-[#fbf7f6] dark:bg-[#161E2E] p-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-16 md:mr-[17.5rem]">

          <div className="flex-shrink-0">
            <img
              className="w-40 h-40 rounded-full md:w-[25rem] md:h-[25rem] md:rounded-none object-cover border-4 border-black dark:border-white md:border-none"
              src={assets.Mo_Face}
              alt="About me"/>
          </div>

          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-xl font-semibold md:text-[1.2rem] md:font-normal">Hey There!</h1>

            <h1 className="text-[1.5rem] md:text-[2.25rem] font-medium text-gray-900 dark:text-white w-120 md:w-[50rem]">
              My name is Mohammad Mahdi.
            </h1>


            <hr className="mt-3 dark:border-white mx-auto md:mx-0 w-2/3 md:w-[37.5rem]"/>

            <p className="mt-6 text-gray-700 dark:text-gray-300 w-full md:w-[51rem] text-base md:text-[1rem]">
              Future Software Engineer passionate about building intelligent systems and dynamic web applications.
            </p>

            <button 
              onClick={openContactForm} 
              className="mt-6 px-6 py-2 text-black cursor-pointer transition-all border-[0.16rem] w-37 h-11
              hover:bg-black hover:text-white duration-300 hover:border-black dark:hover:bg-white dark:hover:text-black 
              dark:text-white font-semibold dark:hover:border-white hover:border-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;
