import { useEffect } from 'react'

import Banner from '../../components/Banner/Banner'
import Cities from '../../components/Cities/Cities'
import Footer from '../../components/Footer/Footer'
import Greeters from '../../components/Greeters/Greeters'
import Map from '../../components/Map/Map'
import Navbar from '../../components/Navbar/Navbar'

import Aos from 'aos'

import 'aos/dist/aos.css'
import './Home.css'

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div>
      <Navbar />
      <Banner />
      <Greeters />
      <Cities />
      <Map />
      <Footer />
    </div>
  )
}

export default Home
