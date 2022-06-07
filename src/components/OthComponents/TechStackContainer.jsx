import React from 'react'

const TechStackContainer = ({Stack}) => {
  return (
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
  )
}

export default TechStackContainer