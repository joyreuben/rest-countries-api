/** @jsxImportSource theme-ui */

import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

function Country() {
  const [country, setCountry] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchCountryData = async () => {
        const response = await fetch(`https://restcountries.com/v2/name/${name}`)
        const country = await response.json()
        setCountry(country)
        console.log(country)
    }
    fetchCountryData()
  }, [name])

  return (

    <div className='py-16 px-8 md:px-16' sx={{color: "color"}}>
      <Link to="/" className='btn'>
        <i className='fas fa-arrow-left'></i>       Back Home
      </Link>

      <section>
        {country.map((c) =>  {

            return <article className='mt-12 grid grid-cols-1 gap-2 md:grid-cols-3 
            md:place-items-center' key={c.numericCode}>
                        <div className=''>
                         <img className="md:h-60 md:w-80" src={c.flag} alt={name}/>
                        </div>
                        <div className="">
                          <div>
                            <h1 className='font-extrabold mt-8 mb-6'>{name}</h1>
                            <section>
                              <h5 className='mt-2 font-semibold'>Native Name: <span className='font-light'>{c.nativeName}</span></h5>
                              <h5 className='mt-2 font-semibold'>Population: <span className='font-light'>{c.population}</span></h5>
                              <h5 className='mt-2 font-semibold'>Region: <span className='font-light'>{c.region}</span></h5>
                              <h5 className='mt-2 font-semibold'>Sub Region: <span className='font-light'>{c.subregion}</span></h5>
                              <h5 className='mt-2 font-semibold'>Capital: <span className='font-light'>{c.capital}</span></h5>
                            </section>
                          </div>
                            <div>
                              <h5 className='mt-2 font-semibold'>Top Level Domain: <span className='font-light'>{c.topLevelDomain}</span></h5>
                              <h5 className='mt-2 font-semibold'>Currencies: <span className='font-light'>{c.currencies[0].name}</span></h5>
                              <h5 className='mt-2 font-semibold'>Languages: <span className='font-light'>{c.languages[0].name}</span></h5>
                            </div>
                        </div>
                            <div>
                              <h5 className='' >
                               Border Countries: 
                               </h5>
                              <div className='flex flex-wrap'>
                                {c.borders.map((border) => (
                                  <ul key={border} >
                                    <li className="flex p-2 mr-2 rounded text-xs tracking-wide shadow dark list-none"
                                     sx={{backgroundColor: "headerBackground"}}>
                                        {border} 
                                     </li>   
                                  </ul>
                                ))} 
                              </div>
                            </div>
                    </article>
                    
        })}
      </section>
    </div>
  )
}

export default Country
