import { GreetersData } from '../../data'

import GreeterCard from '../GreeterCard/GreeterCard'

const Greeters = () => {
  return (
    <div>
      <h2>Greeters</h2>
      {GreetersData.map((g, index) => (
        <GreeterCard key={index} {...g} />
      ))}
      <button>Tout Voir</button>
    </div>
  )
}

export default Greeters
