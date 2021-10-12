import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import BannerCity from '../../components/BannerCity/BannerCity'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

import AliceCarousel from 'react-alice-carousel'
import axios from 'axios'

import './InfoCity.css'
const InfoCity = () => {
  let { id } = useParams()
  const [infoCity, setInfoCity] = useState([])

  useEffect(() => {
    let { id } = useParams
    const getData = async () => {
      const resData = await axios.get(`http://localhost:3000/city/${id}`)
      setInfoCity(resData.data.result)
    }
    getData()
  }, [id])
  return (
    <>
      <Navbar />
      <BannerCity />
      <div className="city-content">
        
      </div>
    </>
  )
}

export default InfoCity
