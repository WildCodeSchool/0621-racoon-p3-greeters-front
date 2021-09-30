import AdminMenu from '../../components/AdminMenu/AdminMenu'
import axios from 'axios'
import 'boxicons'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import './AdminDetailsCity.css'

const AdminDetailsCity = () => {
  const [city, setCity] = useState([])

  let { greeterId } = useParams()

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get(`http://localhost:3000/city/3`)
      setCity(resData.data)
    }
    getData()
  }, [])

  return (
    <>
      <AdminMenu />
      {city[0] && (
        <div className='admin-details-city-container'>
          <h1 className='admin-details-city-title'>Villes</h1>
          <ul className='admin-details-city-list'>
            <li className='admin-details-city-item'>
              Nom : {city[0].city_name}
              <a href='#' className='linkAdmin'>
                <box-icon name='edit-alt' />
              </a>
            </li>
            <li className='admin-details-city-item'>
              Description : {city[0].city_description_fr}
              <a href='#' className='linkAdmin'>
                <box-icon name='edit-alt' />
              </a>
            </li>
            <li className='admin-details-city-item'>
              Titre : {city[0].city_title_fr}
              <a href='#' className='linkAdmin'>
                <box-icon name='edit-alt' />
              </a>
            </li>
            <li className='admin-details-city-item'>
              Photo : {city[0].city_photo}
              <a href='#' className='linkAdmin'>
                <box-icon name='edit-alt' />
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default AdminDetailsCity
