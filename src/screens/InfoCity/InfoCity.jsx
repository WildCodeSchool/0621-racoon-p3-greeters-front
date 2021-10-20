import { useParams } from 'react-router'
import { useState, useEffect, useContext } from 'react'
import BannerCity from '../../components/BannerCity/BannerCity'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { LangueContext } from '../../context/langueContext'
import axios from 'axios'

import Aos from 'aos'
import 'aos/dist/aos.css'
import './InfoCity.css'

const InfoCity = () => {
  let { id } = useParams()
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  const [infoCity, setInfoCity] = useState([])

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  useEffect(() => {
    const getData = async () => {
      const resultData = await axios.get(
        `${process.env.REACT_APP_API_ROUTE}/photos/${id}`
      )
      setInfoCity(resultData.data[0])
      console.log(resultData.data[0].city_description_fr)
    }
    getData()
  }, [id])
  return (
    <>
      <Navbar />
      <BannerCity />
      <div className='city-content'>
        {infoCity && (
          <section>
            {englishMode && infoCity
              ? infoCity.city_description_en
              : infoCity.city_description_fr}
          </section>
        )}
      </div>
      <Footer />
    </>
  )
}

export default InfoCity
