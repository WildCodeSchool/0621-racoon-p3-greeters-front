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
    const getData = async () => {
      const resultData = await axios.get(`http://localhost:3000/photos/${id}`)
      setInfoCity(resultData.data)
      console.log(resultData.data)
    }
    getData()
  }, [id])
  return (
    <>
      <Navbar />
      <BannerCity />
      <div className='city-content'>
        {infoCity &&
          infoCity.map(l => {
            return <section>{l.city_description_fr}</section>
          })}
      </div>
      <Footer />
    </>
  )
}

export default InfoCity
