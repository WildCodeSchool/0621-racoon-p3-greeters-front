import React from 'react'

import GreeterProfil from '../../components/GreeterProfil/GreeterProfil'
import Map from '../../components/Map/Map'
import Greeters from '../../components/Greeters/Greeters'

import './Greeter.css'

const Greeter = () => {
  return (
    <div className='greeter'>
      <GreeterProfil />
      <Map />
      <Greeters />
    </div>
  )
}

export default Greeter
