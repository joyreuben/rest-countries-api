/** @jsxImportSource theme-ui */

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const url = "https://restcountries.com/v2/all"

const Countries = () => {

    const [countries, setCountries] =useState([])
    
        const fetchData = async () => {
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)
        }

        useEffect(() => {
            fetchData()
        }, [])

  return (
    <>
      <section className='gridblock' sx={{color: "color"}}>
         {countries.map((country) => {
           const {name, population, region, capital, flag, numericCode} = country

            return <article key={numericCode}>
              <Link to={`/countries/${name}`} className="btn" >  
                <div>
                  <img src={flag} alt={name}/>
                  <div className='details'
                  sx={{color: "color", backgroundColor: "headerBackground"}}>
                    <h3>{name}</h3>
                    <h4>Population: <span>{population}</span></h4>
                    <h4>Region: <span>{region}</span></h4>
                    <h4>Capital: <span>{capital}</span></h4>
                  </div>
                </div>
              </Link>
            </article>
          })}
        </section>
    </>
  )
}

export default Countries
