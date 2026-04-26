import React from 'react'

const Navbar = () => {
  return (
    <section id="navbar">
  <div className="px-10 py-6">

    <div className="mx-auto flex flex-col md:flex-row items-center md:justify-between">

      {/* Logo */}
      <h2 className="text-2xl italic font-bold bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent mb-4 md:mb-0">
        Piyusha
      </h2>

      {/* Nav Links */}
      <div className="w-full md:w-auto">
        <ul className="
          flex justify-center md:justify-end 
          gap-4 md:gap-6 lg:gap-10 
          text-[0.95rem] md:text-[1.05rem] 
          text-purple-400 font-semibold ">

          <li className="hover:text-purple-300"><a href="#home" className='sm:px-3 py-2'>Home</a></li>
          <li className="hover:text-purple-300"><a href="#about" className='sm:px-3 py-2'>About</a></li>
          <li className="hover:text-purple-300"><a href="#skills" className='sm:px-3 py-2'>Skills</a></li>
          <li className="hover:text-purple-300"><a href="#projects" className='sm:px-3 py-2'>Projects</a></li>

          <li className="bg-purple-800 text-white px-4 py-1 rounded-full hover:shadow-[0_0_20px_5px_rgba(37,99,235,0.6)] hover:text-purple-300 transition">
            <a href="#contact">Contact</a>
          </li>

        </ul>
      </div>

    </div>

  </div>
</section>
  )
}

export default Navbar
