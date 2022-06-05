import React from 'react'

const Button = (props) => {

    const buttonName = props.name
    const buttonClass = props.className
  return (
    <button className={buttonClass}>{buttonName}</button>
  )
}

export default Button