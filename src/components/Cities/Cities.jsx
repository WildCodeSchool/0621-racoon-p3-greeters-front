import { useEffect, useState } from 'react'

import CityCard from '../CityCard/CityCard'

import axios from 'axios'

import './Cities.css'

const Cities = () => {
  const [city, setCity] = useState([])
  //Get Cities photos from db
  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/photos')
      setCity(resData.data)
    }
    getData()
  }, [])

  const uniqueCityId = []
  const uniqueCity = []
  const cityFilter = city.map(c => {
    if (!uniqueCityId.includes(c.city_city_id)) {
      uniqueCityId.push(c.city_city_id)
      uniqueCity.push(c)
    }
  })

  return (
    <div data-aos='fade-right'>
      <h2 className='cities-title'>Les villes à découvrir</h2>

      <div className='cities-container'>
        {uniqueCity.map((c, index) => (
          <CityCard key={index} {...c} />
        ))}
      </div>
      <button className='cities-btn'>Tout Voir</button>
    </div>
  )
}

export default Cities
