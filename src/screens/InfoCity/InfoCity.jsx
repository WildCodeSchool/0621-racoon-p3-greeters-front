import { useParams } from 'react-router'
import { useState, useEffect, useContext } from 'react'
import BannerCity from '../../components/BannerCity/BannerCity'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { LanguageContext } from '../../LanguageContext'
import axios from 'axios'

import Aos from 'aos'
import 'aos/dist/aos.css'
import './InfoCity.css'

const InfoCity = () => {
  let { id } = useParams()
  const { language } = useContext(LanguageContext)
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
      {/*exemple useContext*/}
      {language.map((b, index) => (
        <p key={index}> {b.name}</p>
      ))}
      
      <div className='city-content'>
        {infoCity &&
          infoCity.map((l, index) => {
            return <section key={index}>{l.city_description_fr}</section>
          })}
      </div>
      <Footer />
    </>
  )
}

export default InfoCity
