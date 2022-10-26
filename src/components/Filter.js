/** @jsxImportSource theme-ui */

import React from 'react'

function Filter() {
    
  return (
    <section className='filter'>
        <form className='form-control'>
            <input type="search" name="search" id="search" 
            placeholder='Search for a country'
            sx={{backgroundColor: "headerBackground", color: "color"}}>
            </input>
        </form>

        <div className="region-filter">
            <select name="select" id='select' className='select'
            sx={{backgroundColor: "headerBackground", color: "color"}}>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default Filter
