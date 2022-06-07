import React from 'react'

import Header from './Header'
import About from './About'
import Proyekto from './Proyekto'
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'
// import { SocialIcons } from './Details/ProfileDetails'

const Everything = ({toggleTheme}) => {
  return (
    <div className='eve'>
        <Header toggleTheme={toggleTheme}/>
      <div className='ev'>
        <About />
        <Proyekto />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Everything