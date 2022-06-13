import React from 'react'
import { useState, useEffect } from 'react'

import { Links } from './Config/Details'
import ThemeToggle from './OthComponents/ThemeToggle'
import MenuToggle from './OthComponents/MenuToggle'


const Header = ({toggleTheme}) => {

    const [moveSide, setMoveSide] = useState(false)
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    });

    const [toggle, setToggle] = useState({
      menuDecider: false,
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


    const toggleMenu = () => {
      setToggle({
        menuDecider: toggle.menuDecider ? false : true,
      })
    }

    const closeMenuAfterClicked = () => {
      setToggle({
        closeDecider: toggle.closeDecider ? false : true,
      })
    }



  return (
    
    <header className={moveSide ? 'hd__side' : 'hd__default'}>
          <div className={toggle.menuDecider ? 'sw__links' : 'hd__links'}>
            {Links.map(([title, link], index) => 
              <a key={index} href={link} onClick={closeMenuAfterClicked}>{title}</a>
              )}
          </div>
          <ThemeToggle toggleTheme={toggleTheme} />
          <MenuToggle toggleMenu={toggleMenu} toggle={toggle}/>
    </header>
  )
}

export default Header