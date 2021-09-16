import { GreetersData } from '../../data'

import GreeterCard from '../GreeterCard/GreeterCard'

const Greeters = () => {
  return (
    <div>
      <h2>Greeters</h2>
      {GreetersData.map(g => (
        <GreeterCard {...g} />
      ))}
    </div>
  )
}

export default Greeters
