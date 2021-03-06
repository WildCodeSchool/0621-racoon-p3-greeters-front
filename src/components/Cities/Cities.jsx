import { useEffect, useState, useContext } from 'react'

import axios from 'axios'

import CityCard from '../CityCard/CityCard'
import { LangueContext } from '../../context/langueContext'

import './Cities.css'

const Cities = () => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  const [city, setCity] = useState([])
  //Get Cities photos from db
  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get(
        `${process.env.REACT_APP_API_ROUTE}/photos`
      )
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
    <div className='Cities' data-aos='fade-right'>
      <h2 className='cities-title'>
        {englishMode ? 'Cities to Discover' : 'Villes à découvrir'}
      </h2>

      <div className='cities-container'>
        {uniqueCity.map((c, index) => (
          <CityCard key={index} {...c} />
        ))}
      </div>
    </div>
  )
}

export default Cities
