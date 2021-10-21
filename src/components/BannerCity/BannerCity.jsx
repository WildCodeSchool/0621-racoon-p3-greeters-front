import { LangueContext } from '../../context'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import './BannerCity.css'

const BannerCity = () => {
  let { id } = useParams()
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  const handleDragStart = e => e.preventDefault()
  const [bannerCity, setBannerCity] = useState([])

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get(`http://localhost:3000/city/${id}`)
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
    <>
      <h1>{englishMode ? 'DISCOVER' : 'DECOUVRIR'}</h1>
      <h2>{bannerCity[0] && bannerCity[0].city_name}</h2>
      <div className='banner-city-container'>
        <AliceCarousel
          mouseTracking
          items={item}
          autoPlay
          autoPlayInterval='3500'
        />
      </div>
    </>
  )
}

export default BannerCity
