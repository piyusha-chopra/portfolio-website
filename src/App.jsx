import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  return (
    <div className='bg-linear-to-br from-[#1e1036] via-[#371e5d] to-[#321a47] text-white w-full min-h-screen'>
      <Navbar/>
      <hr className=' h-px border-none bg-linear-to-r from-transparent via-purple-400 to-transparent'/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <hr className='mt-4 h-px border-none bg-linear-to-r from-transparent via-purple-400 to-transparent'/>
      <Contact/>
    </div>
  )
}

export default App

