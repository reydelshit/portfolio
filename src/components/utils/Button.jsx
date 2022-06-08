import React from 'react'

const Button = (props) => {
  
    const email = 'reydel321@gmail.com'

    const buttonName = props.name
    const buttonClass = props.className
    
  return (
    <a className={buttonClass} href={`mailto: ${email}`}>{buttonName}</a>
  )
}

export default Button