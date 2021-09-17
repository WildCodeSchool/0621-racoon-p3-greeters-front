import { City } from '../../data'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import './Banner.css'

const Banner = () => {
  const handleDragStart = e => e.preventDefault()

  const item = []
  City.map(d => {
    let photo = (
      <div>
        <img
          style={{ borderRadius: '25px' }}
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
    <div>
      <AliceCarousel mouseTracking items={item} />
    </div>
  )
}

export default Banner
