/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui'

import React from 'react'

const Header = () => {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <>
         <header className='header'
                  sx={{backgroundColor: "headerBackground", color: "color"}}>
            <div>
                <h1>Where in the world?</h1>
            </div>

            <div className='mode'
             onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}>
                <i className='fas fa-moon'></i>     Dark Mode
            </div>
         </header>
        </>
    )
}

export default Header