import { City } from '../../data'
import CityCard from '../CityCard/CityCard'

import './Cities.css'

const Cities = () => {
  return (
    <>
      <h2 className='cities-title'>Les villes à découvrir</h2>

      <div className='cities-container'>
        {City.map((c, index) => (
          <CityCard key={index} {...c} />
        ))}
      </div>
      <button className='cities-btn'>Tout Voir</button>
    </>
  )
}

export default Cities
