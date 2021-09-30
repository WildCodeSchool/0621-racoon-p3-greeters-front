import React from 'react'

import Greeters from '../../components/Greeters/Greeters'
import GreeterProfil from '../../components/GreeterProfil/GreeterProfil'
import Map from '../../components/Map/Map'
import Navbar from '../../components/Navbar/Navbar'

import './Greeter.css'

const Greeter = () => {
  return (
    <>
      <Navbar />
      <div className='greeter'>
        <GreeterProfil />
        <Map />
        <Greeters />
      </div>
    </>
  )
}

export default Greeter
