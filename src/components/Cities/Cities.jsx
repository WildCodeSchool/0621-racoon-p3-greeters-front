import { City } from '../../data'
import CityCard from '../CityCard/CityCard'

const Cities = () => {
  return (
    <div>
      <h2>Les villes à découvrir</h2>
      {City.map((c, index) => (
        <CityCard key={index} {...c} />
      ))}
      <button>Tout Voir</button>
    </div>
  )
}

export default Cities
