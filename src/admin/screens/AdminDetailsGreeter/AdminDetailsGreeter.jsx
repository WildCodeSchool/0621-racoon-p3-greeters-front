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
      const resData = await axios.get(
        `http://localhost:3000/person/${greeterId}`
      )
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
              <span>Prénom</span> : {greeters[0].person_firstname}
              <button href='#' className='admin-details-icon-btn'>
                <box-icon type='solid' name='edit-alt' />
              </button>
            </li>

            <li className='admin-details-greeter-item'>
              <span>Ville</span> : {greeters[0].city_name}
              <button href='#' className='admin-details-icon-btn'>
                <box-icon type='solid' name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-greeter-item'>
              {' '}
              <span>Langues</span> :{' '}
              <button href='#' className='admin-details-icon-btn'>
                <box-icon type='solid' name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-greeter-item'>
              <span>Phrase d'accroche</span> :{' '}
              {greeters[0].person_catch_phrase_fr}
              <button href='#' className='admin-details-icon-btn'>
                <box-icon type='solid' name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-greeter-item'>
              {' '}
              <span>Thématiques</span> :{' '}
              <button href='#' className='admin-details-icon-btn'>
                <box-icon type='solid' name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-greeter-item'>
              <span>Descriptif</span> : {greeters[0].person_description_fr}
              <button href='#' className='admin-details-icon-btn'>
                <box-icon type='solid' name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-greeter-item'>
              <span>Photo</span> : {greeters[0].person_photo}
              <button href='#' className='admin-details-icon-btn'>
                <box-icon type='solid' name='edit-alt' />
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default AdminDetailsGreeter
