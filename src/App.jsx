import React from 'react'
import { useState, createContext, useEffect } from 'react'
import './index.css'
import 'animate.css';

import Introduction from './components/Introduction'
import Everything from './components/Everything'
import Loader from './components/utils/Loader'


export const ThemeContext = createContext(null)

const App = () => {

    const [theme, setTheme] = useState("dark-mode")
    const [preloader, setPreloader] = useState(true)

    const saveTheme = (themes) => {
      localStorage.setItem('theme', themes)
      setTheme(themes)
    }

    const toggleTheme = () => {
      setTheme((currentTheme => currentTheme === 'dark-mode' ? saveTheme('light-mode') : saveTheme('dark-mode')))
    }

  
    useEffect(() => {
      const localHolder = localStorage.getItem('theme')
      if(localHolder) {
        setTheme(localHolder)
      } else {
        setTheme('dark-mode')
      }

      setTimeout(() => {
        setPreloader(false)
      }, 2000)
    }, [])

    
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {preloader ? <Loader className="mn__preloader"/> : 
            <div className='main' id={theme}>
                <Introduction />
                <Everything toggleTheme={toggleTheme}/>
            </div>
            }

    </ThemeContext.Provider>
  )
}

export default App