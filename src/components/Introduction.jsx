import React from 'react'

import { Details } from './Config/Details'

import Text from './utils/Text'
import Button from './utils/Button'
import SocIcons from './OthComponents/SocIcons'

const Introduction = () => {
   
  return (
    <div className='int__'>
        <div className='in__'>
            <div className='in__inside'>
                <span className='__determine'>— Hello</span>
                <h1>I'm, <Text text={Details.name} />.</h1>
                <span>{Details.status}</span>
                <p>I like <Text text="building" /> stuff, <Text text="writing a blog post" />, 
                    contributing to <Text text="open source " />(not really), 
                    watching <Text text="anime " />  
                    and reading <Text text="books" />.
                </p>
                <Button name="Get in touch!" className="__btn"/>
                <SocIcons/>
            </div>
        </div>
    </div>
  )
}

export default Introduction