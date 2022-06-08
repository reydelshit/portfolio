import React from 'react'

import { SocialIcons } from '../Config/Details'

const SocIcons = () => {
  return (
    <div className='in__socials'>
        {SocialIcons.map(icon => {
            const { id, name, Icon, link } = icon;
            return (
                <a key={id} href={link} target="_blank" rel='noreferrer'><Icon className='__icons' key={id} name={name} /> </a> 
            )
        })}
    </div>
  )
}

export default SocIcons