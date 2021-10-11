import React from 'react'

import GreetersPagination from '../../components/GreetersPagination/GreetersPagination'
import GreeterProfil from '../../components/GreeterProfil/GreeterProfil'
import Map from '../../components/Map/Map'

import './Greeter.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Greeter = () => {
  return (
    <div className='greeter'>
      <Navbar />
      <GreeterProfil />
      <Map />
      <GreetersPagination />
      <Footer />
    </div>
  )
}

export default Greeter
