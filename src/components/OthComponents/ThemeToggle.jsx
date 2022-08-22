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

        const localHolder = localStorage.getItem('toggleIcon')
        setIconLocalStorage((localHolder === 'true' ? saveIcon('false') : saveIcon('true')))

        // const localHolder = localStorage.getItem('theme')
        // setTheme((localHolder === 'dark-mode' ? saveTheme('light-mode') : saveTheme('dark-mode')))

        toggleTheme()
      }
      
      
    useEffect(() => {
      const localIconHolder = localStorage.getItem('toggleIcon')

      if(localIconHolder) {
        setIconLocalStorage(localIconHolder)
      } else {
        setIconLocalStorage('false')
      }
    }, [iconLocalStorage])


  return (
    <button className='toggleButton' onClick={toggleThemeIcon}>
        {iconLocalStorage === 'true' ? <BsSun /> : <RiMoonClearLine />}
    </button>
  )
}

export default ThemeToggle