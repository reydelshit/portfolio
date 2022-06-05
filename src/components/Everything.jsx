import React from 'react'

import Header from './Header'
import About from './About'
import Proyekto from './Proyekto'

const Everything = ({toggleTheme}) => {
  return (
    <div className='eve'>
        <Header toggleTheme={toggleTheme}/>
        <About />
        <Proyekto />
    </div>
  )
}

export default Everything