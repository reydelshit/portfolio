import React from 'react'
import Proj from './OthComponents/Proj';

import { Projects } from './Config/Details';
import Title from './utils/Title';


const Proyekto = () => {
  return (
    <div className='pjx' id='projects'>
        <Title title='Projects'/>
        <Proj Projects={Projects} />
        <a href='https://github.com/reydelshit'>See more of my projects</a>
    </div>
  )
}

export default Proyekto