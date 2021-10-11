import { useState, useEffect } from 'react'
import BannerCity from '../../components/BannerCity/BannerCity'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

import AliceCarousel from 'react-alice-carousel'
import axios from 'axios'

import './InfoCity.css'
const InfoCity = () => {
  const [infoCity, setInfoCity] = useState([])

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/city')
      setInfoCity(resData.data.result)
    }
    getData()
  }, [])
  return (
    <>
      <Navbar />
      <BannerCity />
    </>
  )
}

export default InfoCity
