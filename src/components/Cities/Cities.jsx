import { City } from '../../data'
import CityCard from '../CityCard/CityCard'
import { NavLink, useParams } from 'react-router-dom'

import './Cities.css'

const Cities = () => {
  let { id } = useParams()
  return (
    <div data-aos='fade-right'>
      <h2 className='cities-title'>Les villes à découvrir</h2>

      <div className='cities-container'>
        {City.map((c, index) => (
          <NavLink to={`/infoCity/${id}`}>
            <CityCard key={index} {...c} />
          </NavLink>
        ))}
      </div>
      <button className='cities-btn'>Tout Voir</button>
    </div>
  )
}

export default Cities
