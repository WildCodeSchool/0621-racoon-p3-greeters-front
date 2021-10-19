import { LangueContext } from '../../context'
import { useContext } from 'react'
import { City } from '../../data'
import CityCard from '../CityCard/CityCard'

import './Cities.css'

const Cities = () => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  return (
    <div data-aos='fade-right'>
      <h2 className='cities-title'>
        {englishMode ? 'Cities to discover' : 'Les villes à découvrir'}
      </h2>

      <div className='cities-container'>
        {City.map((c, index) => (
          <CityCard key={index} {...c} />
        ))}
      </div>
      <button className='cities-btn'>
        {englishMode ? 'See All' : 'Tout Voir'}
      </button>
    </div>
  )
}

export default Cities
