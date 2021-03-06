import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Aos from 'aos'
import axios from 'axios'

import GreeterProfilCard from '../GreeterProfilCard/GreeterProfilCard'
import GreeterProfilInfo from '../GreeterProfilInfo/GreeterProfilInfo'

import 'aos/dist/aos.css'
import './GreeterProfil.css'

const GreeterProfil = ({ setGetCordinates }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const { id } = useParams()
  const [greeterData, setGreeterData] = useState('')

  useEffect(() => {
    const getData = async () => {
      const resultData = await axios.get(
        `${process.env.REACT_APP_API_ROUTE}/person/${id}`
      )
      setGreeterData(resultData.data)
      const mapData = {
        position: [
          resultData.data.result[0].city_latitude,
          resultData.data.result[0].city_longitude
        ],
        name: resultData.data.result[0].city_name
      }
      setGetCordinates(mapData)
    }
    getData()
  }, [])

  return (
    <div className='greeter-profil' data-aos='fade-in'>
      {greeterData && (
        <>
          <div className='greeter-profil-left'>
            <GreeterProfilCard {...greeterData} />
          </div>
          <div className='greeter-profil-right'>
            <GreeterProfilInfo {...greeterData} />
          </div>
        </>
      )}
    </div>
  )
}

export default GreeterProfil
