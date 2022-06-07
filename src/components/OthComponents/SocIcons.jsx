import React from 'react'

import { SocialIcons } from '../Details/ProfileDetails'

const SocIcons = () => {
  return (
    <div className='in__socials'>
        {SocialIcons.map(icon => {
            const { id, name, Icon } = icon;
            return (
                <Icon className='__icons' key={id} name={name} />
            )
        })}
    </div>
  )
}

export default SocIcons