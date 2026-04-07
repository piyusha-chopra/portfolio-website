import React from 'react'
import {FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact">
        <div className='px-10 py-5'>
            <h2 className='text-3xl font-semibold text-center'>Contact Me</h2>
            <div className='flex justify-center mt-6 mb-4 gap-8'>
                <a href='mailto:piyushachopra1909@gamil.com' target='_blank'><FaEnvelope className='text-purple-400 text-2xl hover:text-purple-300 cursor-pointer'/></a>
                <a href='https://linkedin.com/in/piyusha-chopra' target='_blank'><FaLinkedin className='text-purple-400 text-2xl  hover:text-purple-300 cursor-pointer'/></a>
                <a href='https://github.com/piyusha-chopra'target='_blank'><FaGithub className='text-purple-400 text-2xl  hover:text-purple-300 cursor-pointer'/></a>
            </div>
       </div>
    </section>
    
  )
}

export default Contact
