import React from 'react'
import { useState, useEffect } from 'react'

import { BsSun, BsSunFill } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'
import { RiCloseFill } from 'react-icons/ri'

import { Links } from '../Details/ProfileDetails'


const Header = ({toggleTheme}) => {

    const [darkMode, setDarkMode] = useState(false)
    const [menu, setMenu] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    // useEffect(() => {

    //   const wew = document.querySelector('.eve')
      
    //   wew.addEventListener('scroll', handleScroll)
    // }, [])

    // const [moveSide, setMoveSide] = useState(false)



    // const handleScroll = () => {
    //     if (window.scrollY > 200) {
    //       console.log('yes')
    //       setMoveSide(true)
    //     } else {
    //       console.log('no')
    //       setMoveSide(false)

    //     }
    // }
    
    const toggleMenu = () => {
      menu ? setMenu(false) : setMenu(true)
      setMenuOpen(!menuOpen)
    }
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode)
      toggleTheme()
    }
  
    const closeMenu = () => {
      setMenu(false)
      setMenuOpen(false)
    }


  return (
    <header>
        {Links.map(([title, link], index) => 
        <a key={index} href={link} onClick={closeMenu}>{title}</a>
        )}
            <button className='toggleDarkMode' onClick={toggleDarkMode}>
                {darkMode ? <BsSunFill /> : <BsSun />}
            </button>
            <button onClick={toggleMenu} className='header__menu'>
              {menuOpen ? <RiCloseFill /> : <BiMenuAltRight/>}
          </button>
    </header>
  )
}

export default Header