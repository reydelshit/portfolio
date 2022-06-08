import React from 'react'

import { Stack } from './Config/Details';
import TechStackContainer from './OthComponents/TechStackContainer';

const TechStack = () => {
  return (
        <div className='__stack'>
            <p>These are the technologies I am comfortable with:</p>
            <TechStackContainer Stack={Stack} />
        </div>
  )
}

export default TechStack