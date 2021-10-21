import React, { useEffect } from 'react'

import { useState } from 'react/cjs/react.development'

import Footer from '../../components/Footer/Footer'
import GreetersPagination from '../../components/GreetersPagination/GreetersPagination'
import GreeterProfil from '../../components/GreeterProfil/GreeterProfil'
import Map from '../../components/Map/Map'
import Navbar from '../../components/Navbar/Navbar'

import Aos from 'aos'

import 'aos/dist/aos.css'
import '../../components/GreetersPagination/GreetersPagination.css'

const Greeter = () => {
  const [greeterCordinates, setGreeterCordinates] = useState(null)

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

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
