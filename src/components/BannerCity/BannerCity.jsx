import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { LangueContext } from '../../context/langueContext'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import './BannerCity.css'

const BannerCity = () => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  let { id } = useParams()
  console.log('Id in params : ' + id)
  const handleDragStart = e => e.preventDefault()
  const [bannerCity, setBannerCity] = useState([])

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get(
        `${process.env.REACT_APP_API_ROUTE}/photos/${id}`
      )
      setBannerCity(resData.data)
    }
    getData()
  }, [id])

  const item = []
  {
    bannerCity &&
      bannerCity.map(r => {
        let photo = (
          <div>
            <img
              src={r.photos_img}
              onDragStart={handleDragStart}
              className='banner-city'
            />
            <h2 className='banner-city-text'>{r.photos_leg_fr}</h2>
          </div>
        )
        item.push(photo)
      })
  }
  return (
    <div className='banner-city-main-container'>
      <h1>{englishMode ? 'Discover' : 'Découvrir'}</h1>
      <h2>{bannerCity && bannerCity.city_name}</h2>
      <div className='banner-city-container'>
        <AliceCarousel
          mouseTracking
          items={item}
          autoPlay
          autoPlayInterval='3500'
        />
      </div>
    </div>
  )
}

export default BannerCity
