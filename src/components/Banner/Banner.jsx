import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import './Banner.css'
import { useEffect, useState } from 'react'

import axios from 'axios'

const Banner = () => {
  const [bannerCity, setBannerCity] = useState([])

  //Get banner from the db
  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/city')
      setBannerCity(resData.data)
    }
    getData()
  }, [])

  const handleDragStart = e => e.preventDefault()

  const item = []
  // Filter City with no banner
  const cityWithBan = bannerCity.filter(
    d => d.city_banner != null && d.city_banner != ''
  )
  {
    bannerCity
      ? cityWithBan.map(d => {
          let photo = (
            <div>
              <img
                src={d.city_banner}
                onDragStart={handleDragStart}
                className='banner-img'
              />
              <button className='banner-button'>Réserver Votre Balade</button>
              <h2 className='banner-text'>Découvrir {d.city_name}</h2>
            </div>
          )
          item.push(photo)
        })
      : null
  }

  return (
    <div className='Banner' data-aos='fade-zoom-in'>
      <AliceCarousel
        mouseTracking
        items={item}
        autoPlay
        autoPlayInterval='3500'
      />
    </div>
  )
}

export default Banner
