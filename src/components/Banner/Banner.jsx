import { City } from '../../data'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { LangueContext } from '../../context'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import './Banner.css'
import { useEffect, useState } from 'react'

import axios from 'axios'

const Banner = () => {
  const [bannerCity, setBannerCity] = useState([])
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/city')
      setBannerCity(resData.data)
    }
    getData()
  }, [])

  const handleDragStart = e => e.preventDefault()

  const item = []
  City.map(d => {
    let photo = (
      <div>
        <img
          src={d.city_banner}
          onDragStart={handleDragStart}
          className='banner-img'
        />
        <Link to='/meetgreeter'>
          <button className='banner-button'>
            {englishMode ? 'Book your journey' : 'Réserver votre balade'}
          </button>
        </Link>
        <h2 className='banner-text'>Découvrir {d.city_name}</h2>
      </div>
    )
    item.push(photo)
  })

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
