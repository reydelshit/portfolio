import React from 'react'
import { RiCloseFill, RiMenu3Line } from 'react-icons/ri'


const MenuToggle = ({toggleMenu, toggle}) => {
  return (
    <button onClick={toggleMenu} className='toggleMenu'>
        {toggle.menuDecider ? <RiCloseFill /> : <RiMenu3Line/>}
    </button>
  )
}

export default MenuToggle