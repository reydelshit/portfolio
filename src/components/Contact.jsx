import React from 'react'
import SocIcons from './OthComponents/SocIcons'
import Button from './utils/Button'

const Contact = () => {

    const email = 'reydel321@gmail.com'

    const copyText = () => {
        navigator.clipboard.writeText(email)

    }

  return (
    <div className='contact' id='contact'>
        <h1>GET IN TOUCH</h1>
        <a href={`mailto: ${email}`} className='em' onClick={copyText}>{email}</a>
        <Button className='ctx__btn' name='Send Message'/>
        <SocIcons />
    </div>
  )
}

export default Contact