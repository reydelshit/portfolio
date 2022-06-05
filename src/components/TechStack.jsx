import React from 'react'

import { Stack } from '../Details/ProfileDetails';

const TechStack = () => {
  return (
        <div className='__stack'>
            <p>These are the technologies I am comfortable with:</p>
            <div className='__item' >
                {Stack.map((stac) => {
                const { id, name, Icon } = stac; 
                    return (
                            <div className='item__container' key={id}>
                              <Icon className='__icon'/>
                              <p>{name}</p>
                            </div>
                    )
                    })}
            </div>
        </div>
  )
}

export default TechStack