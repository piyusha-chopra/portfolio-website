import React from 'react'

const Navbar = () => {
  return (
    <section id="navbar">
        <div className='px-10 py-6'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-2xl italic font-bold bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent'>Piyusha</h2>
                </div>
                <div>
                    <ul className='flex justify-between gap-10 text-[1.1rem] text-purple-400 font-semibold'>
                        <li className='hover:text-purple-300'><a href="#home">Home</a></li>
                        <li className='hover:text-purple-300'><a href="#about">About</a></li>
                        <li className='hover:text-purple-300'><a href="#skills">Skills</a></li>
                        <li className='hover:text-purple-300'><a href="#projects">Projects</a></li>
                        <li className='bg-purple-800 text-white px-4 py-1 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(37,99,235,0.6)] hover:text-purple-300'><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar
