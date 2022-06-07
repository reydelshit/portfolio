import React from 'react'
import { useState, createContext } from 'react'
import './index.css'

import Introduction from './components/Introduction'
import Everything from './components/Everything'


export const ThemeContext = createContext(null)

const App = () => {
    
    const [theme, setTheme] = useState("dark-mode")

    const toggleTheme = () => {
      setTheme((currentTheme => currentTheme === "dark-mode" ? "light-mode" : "dark-mode"))
    }
    
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className='main' id={theme}>
            <Introduction />
            <Everything toggleTheme={toggleTheme}/>
        </div>
    </ThemeContext.Provider>
  )
}

export default App