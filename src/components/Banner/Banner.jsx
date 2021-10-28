import { useEffect, useState, useContext } from 'react'

import axios from 'axios'
import AliceCarousel from 'react-alice-carousel'

import { LangueContext } from '../../context/langueContext'

import './Banner.css'
import 'react-alice-carousel/lib/alice-carousel.css'

const Banner = () => {
  const [bannerCity, setBannerCity] = useState([])
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode

  //Get banner from the db
  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get(`${process.env.REACT_APP_API_ROUTE}/city`)
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
              <a href='/meetgreeter' alt=''>
                <button className='banner-button'>
                  {englishMode ? 'Book your journey' : 'Réserver votre balade'}
                </button>
              </a>
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
        autoPlayInterval='4000'
        infinite
        animationDuration='2000'
      />
    </div>
  )
}

export default Banner
