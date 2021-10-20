import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import './BannerCity.css'

const BannerCity = () => {
  let { id } = useParams()
  console.log('Id in params : ' + id)
  const handleDragStart = e => e.preventDefault()
  const [bannerCity, setBannerCity] = useState([])

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get(`http://localhost:3000/photos/${id}`)
      setBannerCity(resData.data)
      console.log(resData.data)
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
    <div className='banner-city-container'>
      <AliceCarousel
        mouseTracking
        items={item}
        autoPlay
        autoPlayInterval='3500'
      />
    </div>
  )
}

export default BannerCity
