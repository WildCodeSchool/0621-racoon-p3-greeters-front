import { GreetersData } from '../../data'

import GreeterCard from '../GreeterCard/GreeterCard'

import './HomeGreeters.css'

const HomeGreeters = () => {
  return (
    <>
      <h2 className='home-greeters-title'>Les Greeters</h2>

      <div className='home-greeters-container'>
        {GreetersData.map((g, index) => (
          <GreeterCard key={index} {...g} />
        ))}
      </div>
      <button className='home-greeters-btn'>Tout Voir</button>
    </>
  )
}

export default HomeGreeters
