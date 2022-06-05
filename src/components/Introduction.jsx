import React from 'react'

import { Details, SocialIcons } from '../Details/ProfileDetails'

import Text from './utils/Text'
import Button from './utils/Button'

const Introduction = () => {
   
  return (
    <div className='int__'>
        <div className='int__inside'>
            <span className='__determine'>— Hello</span>
            <h1>I'm, <Text text={Details.name} />.</h1>
            <span>{Details.status}</span>
            <p>I like <Text text="building" /> stuff, <Text text="writing a blog post" />, 
                contributing to <Text text="open source " />(not really), 
                watching <Text text="anime " />  
                 and reading <Text text="books" />.
            </p>
            <Button name="Hire me" className="__btn"/>
            <div className='int__socials'>
                {SocialIcons.map(icon => {
                    const { id, name, Icon } = icon;
                    return (
                        <Icon className='__icons' key={id} name={name} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Introduction