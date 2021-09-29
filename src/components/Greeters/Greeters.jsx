import { GreetersData } from '../../data'

import GreeterCard from '../GreeterCard/GreeterCard'

import './Greeters.css'

const Greeters = () => {
  return (
    <>
      <h2 className='greeters-title'>Les Greeters</h2>

      <div className='greeters-container'>
        {GreetersData.map((g, index) => (
          <GreeterCard key={index} {...g} />
        ))}
      </div>
      <button className='greeters-btn'>Tout Voir</button>
    </>
  )
}

export default Greeters
