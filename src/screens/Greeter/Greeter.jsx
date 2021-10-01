import React from 'react'
import { useState } from 'react/cjs/react.development'

import GreeterProfil from '../../components/GreeterProfil/GreeterProfil'
import Map from '../../components/Map/Map'
import Greeters from '../../components/Greeters/Greeters'

import './Greeter.css'

const Greeter = () => {
  const [greeterCoordinates, setGreeterCoordinates] = useState(null)

  return (
    <div className='greeter'>
      <GreeterProfil getCoordinates={setGreeterCoordinates} />
      <Map coordinates={greeterCoordinates} />
      <Greeters />
    </div>
  )
}

export default Greeter
