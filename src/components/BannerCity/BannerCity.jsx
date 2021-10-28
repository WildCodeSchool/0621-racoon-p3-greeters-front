import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel'

import { LangueContext } from '../../context/langueContext'

import './BannerCity.css'
import 'react-alice-carousel/lib/alice-carousel.css'

const BannerCity = () => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  let { id } = useParams()
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
            <h3 className='banner-city-text'>
              {englishMode ? r.photos_leg_en : r.photos_leg_fr}
            </h3>
          </div>
        )
        item.push(photo)
      })
  }
  return (
    <div className='banner-city-main-container'>
      {bannerCity[0] && <h1>{bannerCity[0].city_name}</h1>}
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
