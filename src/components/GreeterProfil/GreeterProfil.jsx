import { useParams } from 'react-router'
import { useState, useEffect } from 'react'

import axios from 'axios'

import GreeterProfilCard from '../GreeterProfilCard/GreeterProfilCard'
import GreeterProfilInfo from '../GreeterProfilInfo/GreeterProfilInfo'

import './GreeterProfil.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const GreeterProfil = ({ setGetCordinates }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const { id } = useParams()
  const [greeterData, setGreeterData] = useState('')

  useEffect(() => {
    const getData = async () => {
      const resultData = await axios.get(`http://localhost:3000/person/${id}`)
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
