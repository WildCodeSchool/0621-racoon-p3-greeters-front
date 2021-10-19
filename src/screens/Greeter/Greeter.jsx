import React from 'react'
import { useState } from 'react/cjs/react.development'

import GreetersPagination from '../../components/GreetersPagination/GreetersPagination'
import GreeterProfil from '../../components/GreeterProfil/GreeterProfil'
import Map from '../../components/Map/Map'

import './Greeter.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Greeter = () => {
  const [greeterCordinates, setGreeterCordinates] = useState(null)

  return (
    <div className='greeter'>
      <Navbar />
      <GreeterProfil setGetCordinates={setGreeterCordinates} />
      <Map cordinates={greeterCordinates} />
      <GreetersPagination />
      <Footer />
    </div>
  )
}

export default Greeter
