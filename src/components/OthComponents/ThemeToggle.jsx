import React, { useEffect, useState } from 'react'
import { BsSun } from 'react-icons/bs'
import { RiMoonClearLine } from 'react-icons/ri'

const ThemeToggle = ({toggleTheme}) => {

    const [iconLocalStorage, setIconLocalStorage] = useState('false')


    const saveIcon = (icon) => {
        localStorage.setItem('toggleIcon', icon)
        setIconLocalStorage(icon)
      }

      const toggleThemeIcon = () => {
        setIconLocalStorage((currentIcon => currentIcon === 'true' ? saveIcon('false') : saveIcon('true')))
        toggleTheme()
      }
      
      
    useEffect(() => {
      const localIconHolder = localStorage.getItem('toggleIcon')

      if(localIconHolder) {
        setIconLocalStorage(localIconHolder)
      } else {
        setIconLocalStorage('false')
      }
    }, [])


  return (
    <button className='toggleButton' onClick={toggleThemeIcon}>
        {iconLocalStorage === 'true' ? <BsSun /> : <RiMoonClearLine />}
    </button>
  )
}

export default ThemeToggle