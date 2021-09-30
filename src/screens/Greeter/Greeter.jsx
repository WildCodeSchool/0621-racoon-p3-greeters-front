import React from 'react'

import Footer from '../../components/Footer/Footer'
import Greeters from '../../components/Greeters/Greeters'
import GreeterProfil from '../../components/GreeterProfil/GreeterProfil'
import Map from '../../components/Map/Map'
import Navbar from '../../components/Navbar/Navbar'

import './Greeter.css'

const Greeter = () => {
  return (
    <div className='greeter'>
      <Navbar />
      <GreeterProfil />
      <Map />
      <Greeters />
      <Footer />
    </div>
  )
}

export default Greeter
