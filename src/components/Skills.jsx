import React from 'react'

const Skills = () => {
  return (
    <section id="skills">
      <div className='px-10 py-8'>
        <div className='bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-8 shadow-2xl'>
          <h2 className='text-3xl font-semibold text-center mb-6'>My Skills</h2>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 '>
              <div className='flex flex-col justify-center items-center bg-white/5 p-4 rounded-xl hover:bg-white/10
              '>
                  <img src='https://cdn-icons-png.flaticon.com/128/1051/1051277.png'
                      className='w-15'/>
                  <span className='mt-2'>HTML</span>
              </div>
              <div className='flex flex-col justify-center items-center bg-white/5 p-4 rounded-xl hover:bg-white/10'>
                  <img src='https://cdn-icons-png.flaticon.com/128/732/732190.png'
                      className='w-15'/>
                  <span className='mt-2'>CSS</span>
              </div>
              <div className='flex flex-col justify-center items-center bg-white/5 p-4 rounded-xl hover:bg-white/10'>
                  <img src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png'
                      className='w-15'/>
                  <span className='mt-2'>JavaScript</span>
              </div>
              <div className='flex flex-col justify-center items-center bg-white/5 p-4 rounded-xl hover:bg-white/10'>
                  <img src='https://cdn-icons-png.flaticon.com/128/3459/3459528.png'
                      className='w-15'/>
                  <span className='mt-2'>React</span>
              </div>
              <div className='flex flex-col justify-center items-center bg-white/5 p-4 rounded-xl hover:bg-white/10'>
                  <img src='https://www.svgrepo.com/show/374118/tailwind.svg'
                      className='w-15'/>
                  <span className='mt-2'>Taiwind CSS</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
