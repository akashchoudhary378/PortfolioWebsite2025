import React from 'react'
import NavBar from './Components/NavBar'
import Intro from './Components/Intro'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'

const App = () => {

  return (
    <div className='bg-zinc-900 w-full screen text-white'>

     <Intro/>
     <Skills/>
     <Portfolio/>
     <ContactMe/>
     <Footer/>
    
     
    </div>
  )
}

export default App