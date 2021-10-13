import { useEffect, useState } from 'react'

import axios from 'axios'

import { City } from '../../data'
import CityCard from '../CityCard/CityCard'

import './Cities.css'

const Cities = () => {
  const [cityList, setCityList] = useState('')

  useEffect(() => {
    const getCity = async () => {
      const resCity = await axios.get('http://localhost:3000/photos')
      console.log(resCity)
      setCityList(resCity.data)
    }
    getCity()
  }, [])

  return (
    <div data-aos='fade-right'>
      <h2 className='cities-title'>Les villes à découvrir</h2>

      {/* <div className='cities-container'>
        {City.map((c, index) => (
          <CityCard key={index} {...c} />
        ))}
      </div> */}
      <div className='cities-container'>
        {cityList.map((c, index) => (
          <CityCard key={index} {...c} />
        ))}
      </div>
      <button className='cities-btn'>Tout Voir</button>
    </div>
  )
}

export default Cities
