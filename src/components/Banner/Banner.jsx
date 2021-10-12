import { City } from '../../data'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import './Banner.css'
import { useEffect } from 'react'

const Banner = () => {
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
        <button className='banner-button'>Réserver Votre Balade</button>
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
        autoPlayInterval='3500'
      />
    </div>
  )
}

export default Banner
