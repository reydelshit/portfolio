import React from 'react'
import { useState, useEffect } from 'react'

import { BsSun, BsSunFill } from 'react-icons/bs'
// import { BiMenuAltRight } from 'react-icons/bi'
import { RiCloseFill, RiMenu3Line } from 'react-icons/ri'

import { Links } from './Details/ProfileDetails'


const Header = ({toggleTheme}) => {

    const [moveSide, setMoveSide] = useState(false)
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    });

    const [toggle, setToggle] = useState({
      menuDecider: false,
      themeDecider: false,
      closeDecider: false,
    })

    
    useEffect(() => {

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
        });
      }

      const handleScroll = () => {
          window.scrollY > 50 ? setMoveSide(true) : setMoveSide(false)
      }

      window.addEventListener("resize", handleResize);

      if(window.innerWidth > 1299) {
        window.addEventListener('scroll', handleScroll)
      }

      if(window.innerWidth < 1194) {
        setMoveSide(false)
      }


      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener('scroll', handleScroll);
      };


    }, [windowSize]); 


    const toggleThemeIcon = () => {
      setToggle({
        themeDecider: toggle.themeDecider ? false : true,
      })
      toggleTheme()
      // console.log(toggle.themeDecider)
    }
    const toggleMenu = () => {
      setToggle({
        menuDecider: toggle.menuDecider ? false : true,
      })
      // console.log(toggle.menuDecider)
    }

    const closeMenuAfterClicked = () => {
      setToggle({
        closeDecider: toggle.closeDecider ? false : true,
      })
      // console.log(toggle.closeDecider)
    }


  return (
    
    <header className={moveSide ? 'hd__side' : 'hd__default'}>
          <div className={toggle.menuDecider ? 'sw__links' : 'hd__links'}>
            {Links.map(([title, link], index) => 
              <a key={index} href={link} onClick={closeMenuAfterClicked}>{title}</a>
              )}
          </div>
            <button className='toggleButton' onClick={toggleThemeIcon}>
                {toggle.themeDecider ? <BsSunFill /> : <BsSun />}
            </button>
            <button onClick={toggleMenu} className='toggleMenu'>
              {toggle.menuDecider ? <RiCloseFill /> : <RiMenu3Line/>}
          </button>
    </header>
  )
}

export default Header