import React from 'react'

const Home = () => {
  return (
    <section id="home">
      <div className='flex justify-between px-10 py-20'>
          {/* Left */}
        <div className='w-1/2'>
          <h2 className='text-3xl font-semibold'>Hi, I'm Piyusha</h2>
          <h1 className='text-4xl mt-2 font-bold bg-gradient-to-r from-purple-300 to-blue-400 bg-clip-text text-transparent'>Front-End Developer</h1>
          <p className='mt-4 text-purple-200'>I build responsive and engaging web applications using React and JavaScript. I focus on writing clean, efficient code and turning ideas into functional, data-driven projects.</p>
          <div className='mt-8'>
              <a href='#projects'><button className='bg-purple-800 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(37,99,235,0.6)] cursor-pointer'>View Projects</button></a>
          </div>
        </div>
        {/* Right */}
        <div className='w-1/2 flex items-center justify-center'>
          <img className='w-[450px] drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]' src='src/assets/profile.svg' alt='developer'/>
        </div>
      </div>
    </section>
  )
}

export default Home
