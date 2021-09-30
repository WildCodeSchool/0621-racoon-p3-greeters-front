import AdminMenu from '../../components/AdminMenu/AdminMenu'
import axios from 'axios'
import 'boxicons'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import './AdminDetailsGreeter.css'

const AdminDetailsGreeter = () => {
  const [greeters, setGreeters] = useState([])

  let { greeterId } = useParams()

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get(`http://localhost:3000/person/10`)
      setGreeters(resData.data.result)
    }

    getData()
  }, [])

  return (
    <>
      <AdminMenu />
      {greeters[0] && (
        <div className='admin-details-greeter-container'>
          <h1 className='admin-details-greeter-title'>Greeter</h1>
          <ul className='admin-details-greeter-list'>
            <li className='admin-details-greeter-item'>
              Prénom :{greeters[0].person_firstname}
              <a href='#' className='linkAdmin'>
                <box-icon name='edit-alt' />
              </a>
            </li>

            <li className='admin-details-greeter-item'>
              Ville :{greeters[0].city_name}
              <a href='#' className='linkAdmin'>
                <box-icon name='edit-alt' />
              </a>
            </li>
            <li className='admin-details-greeter-item'>Langues : </li>
            <li className='admin-details-greeter-item'>
              Phrase d'accroche :{greeters[0].person_catch_phrase_fr}
              <a href='#' className='linkAdmin'>
                <box-icon name='edit-alt' />
              </a>
            </li>
            <li className='admin-details-greeter-item'>Thématiques : </li>
            <li className='admin-details-greeter-item'>
              Descriptif :{greeters[0].person_description_fr}
              <a href='#' className='linkAdmin'>
                <box-icon name='edit-alt' />
              </a>
            </li>
            <li className='admin-details-greeter-item'>
              Photo :{greeters[0].person_photo}
              <a href='#' className='linkAdmin'>
                <box-icon name='edit-alt'>modifier</box-icon>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default AdminDetailsGreeter
