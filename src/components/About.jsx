import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className='flex justify-between px-10 py-10 gap-15'>
        {/* Left */}
        {/* <div className='w-1/4'>
          <div className='bg-purple-800 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]  px-2 py-2 rounded-2xl w-fit'>
              <img src='https://i.pinimg.com/originals/a5/28/2b/a5282b956178fe69b6a554da12c9c7c4.png'
                className='rounded-2xl w-full max-w-[200px] md:max-w-[250px] mx-auto object-contain'/>
          </div>
        </div> */}
        {/* Right */}
        <div>
          <h2 className='text-3xl font-semibold text-center'>About Me</h2>
          <p className='mt-6'>I'm a frontend developer who enjoys building web applications and turning ideas into clean, functional user interfaces.</p>
          <p className='mt-4'>I started with HTML, CSS, and JavaScript, and later moved to React, where I began working on projects and understanding how real-world applications are built. I enjoy the process of creating responsive designs and making sure the user experience feels smooth and intuitive.
                            I believe in learning by doing, so I focus on building projects and improving with each one. I'm always trying to write better code, structure things more clearly, and grow step by step as a developer..</p>
        </div>
      </div>
    </section>
  )
}

export default About
