import React from 'react'
import Proj from './OthComponents/Proj';

import { Projects } from './Details/ProfileDetails';
import Title from './utils/Title';


const Proyekto = () => {
  return (
    <div className='pjx' id='projects'>
        <Title title='Projects'/>
        <Proj Projects={Projects} />
    </div>
  )
}

export default Proyekto