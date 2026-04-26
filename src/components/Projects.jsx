import React from 'react'

const Projects = () => {
  return (
    <section id="projects">
      <div className='px-10 py-15'>
        <h2 className='text-3xl font-semibold text-center mb-6'>Projects</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='p-5 shadow-2xl rounded-2xl bg-white/5'>
              <h3 className='text-xl font-medium underline'>Expense Tracker</h3>
              <p className='mt-3'>A web app to manage income and expenses with real-time balance.</p>
              <p className='mt-2'>Tech Stacks: React, JavaScript, Tailwind CSS</p>
              <div className='flex mt-3 gap-6' >
                  <a  href='https://github.com/piyusha-chopra/expense-manager-react.git' target='_blank' className='cursor-pointer text-purple-300 underline font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl'>GitHub</a>
                  <a href='https://expense-manager-react-bice.vercel.app/' target='_blank' className='cursor-pointer text-purple-300 underline font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl'>Live Demo</a>
              </div>
          </div>
          <div className='p-5 shadow-2xl rounded-2xl bg-white/5'>
              <h3 className='text-xl font-medium underline'>Notes Application</h3>
              <p className='mt-3'>A simple notes application that allows users to create and delete notes.</p>
              <p className='mt-2'>Tech Stacks: React, JavaScript, Tailwind CSS</p>
              <div className='flex mt-3 gap-6' >
                  <a  href='https://github.com/piyusha-chopra/notes-application' target='_blank' className='cursor-pointer text-purple-300 underline font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl'>GitHub</a>
                  <a href='https://notes-application-kappa-five.vercel.app/' target='_blank' className='cursor-pointer text-purple-300 underline font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl'>Live Demo</a>
              </div>
          </div>
          <div className='p-5 shadow-2xl rounded-2xl bg-white/5'>
              <h3 className='text-xl font-medium underline'>Weather App</h3>
              <p className='mt-3'>A responsive weather application that displays real-time weather information using APIs.</p>
              <p className='mt-2'>Tech Stacks: HTML, CSS, JavaScript</p>
              <div className='flex mt-3 gap-6' >
                  <a  href='https://github.com/piyusha-chopra/Weather-App' target='_blank' className='cursor-pointer text-purple-300 underline font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl'>GitHub</a>
                  <a href='https://weather-app-one-wheat-42.vercel.app/' target='_blank' className='cursor-pointer text-purple-300 underline font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl'>Live Demo</a>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
