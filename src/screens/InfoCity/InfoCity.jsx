import { useParams } from 'react-router'
import { useState, useEffect, useContext } from 'react'
import BannerCity from '../../components/BannerCity/BannerCity'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { LangueContext } from '../../context'
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
          infoCity.map((l, index) => {
            return (
              <section key={index}>
                {englishMode ? l.city_description_en : l.city_description_fr}
              </section>
            )
          })}
      </div>
      <Footer />
    </>
  )
}

export default InfoCity
