import AdminMenu from '../../components/AdminMenu/AdminMenu'
import useModal from '../../components/CustomHooks/UseModal'
import Modal from '../../components/Modal/Modal'
import axios from 'axios'
import 'boxicons'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import './AdminDetailsCity.css'

const AdminDetailsCity = () => {
  // state for send city id

  const [city, setCity] = useState([])

  const [cityName, setCityName] = useState('')
  const [cityDesc, setCityDesc] = useState([])
  const [cityDescEn, setCityDescEn] = useState([])
  const [cityTitle, setCitytitle] = useState([])
  const [cityTitleEn, setCitytitleEn] = useState([])
  const [cityPhoto, setCityPhoto] = useState([])
  // import modal for city

  const { isShowing: isCityNameFormShowed, toggle: toggleCityNameForm } =
    useModal()
  const { isShowing: isCityDescFormShowed, toggle: toggleCityDescForm } =
    useModal()
  const { isShowing: isCityDescEnFormShowed, toggle: toggleCityDescEnForm } =
    useModal()
  const { isShowing: isCityTitleFormShowed, toggle: toggleCityTitleForm } =
    useModal()
  const { isShowing: isCityTitleEnFormShowed, toggle: toggleCityTitleEnForm } =
    useModal()
  const { isShowing: isCityPhotoFormShowed, toggle: toggleCityPhotoForm } =
    useModal()
  // params for recup city id from url

  let { cityId } = useParams()

  //Get data from back
  const getData = async () => {
    const resData = await axios.get(`http://localhost:3000/city/${cityId}`)
    setCity(resData.data)
  }
  useEffect(() => {
    getData()
  }, [])

  const putNameData = async () => {
    const results = await axios.put(`http://localhost:3000/city/${cityId}`, {
      city_name: cityName
    })
    getData()
  }

  const putDescData = async () => {
    const results = await axios.put(`http://localhost:3000/city/${cityId}`, {
      city_description_fr: cityDesc
    })
    getData()
  }

  const putDescEnData = async () => {
    const results = await axios.put(`http://localhost:3000/city/${cityId}`, {
      city_description_en: cityDescEn
    })
    getData()
  }

  const handleSubmitName = e => {
    e.preventDefault()
    putNameData()
    toggleCityNameForm()
  }

  const handleSubmitDesc = e => {
    e.preventDefault()
    putDescData()
    toggleCityDescForm()
  }

  const handleSubmitDescEn = e => {
    e.preventDefault()
    putDescEnData()
    toggleCityDescEnForm()
  }

  return (
    <>
      <AdminMenu />(
      {city[0] ? (
        <div className='admin-details-city-container'>
          <h1 className='admin-details-city-title'>Villes</h1>
          <ul className='admin-details-city-list'>
            <li className='admin-details-city-item'>
              <span>Nom</span> : {city[0].city_name}
              <button
                onClick={toggleCityNameForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Description</span> : {city[0].city_description_fr}
              <button
                onClick={toggleCityDescForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Description en anglais</span> :{city[0].city_description_en}
              <button
                onClick={toggleCityDescEnForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Titre</span> : {city[0].city_title_fr}
              <button
                onClick={toggleCityTitleForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Titre en anglais</span> : {city[0].city_title_en}
              <button
                onClick={toggleCityTitleEnForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Photo</span> : {city[0].city_photo}
              <button
                onClick={toggleCityPhotoForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
          </ul>
        </div>
      ) : null}
      )
      <Modal
        isShowing={isCityNameFormShowed}
        hide={toggleCityNameForm}
        title='Modifier le nom'
      >
        <form onSubmit={handleSubmitName}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setCityName(e.target.value)}
              value={cityName}
            />
          </div>
          <div className='form-group'>
            <button type='submit' value='Envoyer'>
              Envoyer
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        isShowing={isCityDescFormShowed}
        hide={toggleCityDescForm}
        title='Modifier la description'
      >
        <form onSubmit={handleSubmitDesc}>
          <div className='form-group'>
            <textarea
              type='text'
              placeholder='modifier ici'
              onChange={e => setCityDesc(e.target.value)}
              value={cityDesc}
            />
          </div>
          <div className='form-group'>
            <button type='submit' value='Envoyer'>
              Envoyer
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        isShowing={isCityDescEnFormShowed}
        hide={toggleCityDescEnForm}
        title='Modifier la description en anglais'
      >
        <form onSubmit={handleSubmitDescEn}>
          <div className='form-group'>
            <textarea
              type='text'
              placeholder='modifier ici'
              onChange={e => setCityDescEn(e.target.value)}
              value={cityDescEn}
            />
          </div>
          <div className='form-group'>
            <button type='submit' value='Envoyer'>
              Envoyer
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        isShowing={isCityTitleFormShowed}
        hide={toggleCityTitleForm}
        title='Modifier le titre'
      >
        <form>
          <div className='form-group'>
            <input type='text' placeholder='modifier ici' />
          </div>
          <div className='form-group'>
            <input type='submit' value='Envoyer' />
          </div>
        </form>
      </Modal>
      <Modal
        isShowing={isCityTitleEnFormShowed}
        hide={toggleCityTitleEnForm}
        title='Modifier le titre en anglais'
      >
        <form>
          <div className='form-group'>
            <input type='text' placeholder='modifier ici' />
          </div>
          <div className='form-group'>
            <input type='submit' value='Envoyer' />
          </div>
        </form>
      </Modal>
      <Modal
        isShowing={isCityPhotoFormShowed}
        hide={toggleCityPhotoForm}
        title='Modifier la photo'
      >
        <form>
          <div className='form-group'>
            <input type='text' placeholder='modifier ici' />
          </div>
          <div className='form-group'>
            <input type='submit' value='Envoyer' />
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AdminDetailsCity
