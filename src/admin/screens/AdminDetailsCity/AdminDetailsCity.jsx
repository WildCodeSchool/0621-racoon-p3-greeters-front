import AdminMenu from '../../components/AdminMenu/AdminMenu'
import useModal from '../../components/CustomHooks/UseModal'
import Modal from '../../components/Modal/Modal'
import axios from 'axios'
import 'boxicons'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import './AdminDetailsCity.css'

const AdminDetailsCity = () => {
  //State for send city id
  const [city, setCity] = useState([])
  //States for city data
  const [cityName, setCityName] = useState('')
  const [cityDesc, setCityDesc] = useState([])
  const [cityDescEn, setCityDescEn] = useState([])
  const [cityTitle, setCityTitle] = useState([])
  const [cityTitleEn, setCitytitleEn] = useState([])
  const [cityPhoto, setCityPhoto] = useState([])
  const [cityLegPhoto, setCityLegPhoto] = useState([])
  const [cityLegPhotoEn, setCityLegPhotoEn] = useState([])
  const [cityLien, setCityLien] = useState([])
  const [cityLongitude, setCityLongitude] = useState([])
  const [cityLatitude, setCityLatitude] = useState([])
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
  const {
    isShowing: isCityLegPhotoFormShowed,
    toggle: toggleCityLegPhotoForm
  } = useModal()
  const {
    isShowing: isCityLegPhotoEnFormShowed,
    toggle: toggleCityLegEnPhotoForm
  } = useModal()
  const { isShowing: isCityLienFormShowed, toggle: toggleCityLienForm } =
    useModal()
  const { isShowing: isCityLongFormShowed, toggle: toggleCityLongForm } =
    useModal()
  const { isShowing: isCityLatFormShowed, toggle: toggleCityLatForm } =
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

  const putData = async (name, value) => {
    console.log(name, value)
    const results = await axios.put(`http://localhost:3000/city/${cityId}`, {
      [name]: value
    })
    getData()
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target[0].value)
    putData(e.target[0].name, e.target[0].value)

    if (e.target[0].name === 'city_name') {
      toggleCityNameForm()
    }
    if (e.target[0].name === 'city_description_fr') {
      toggleCityDescForm()
    }
    if (e.target[0].name === 'city_description_en') {
      toggleCityDescEnForm()
    }
    if (e.target[0].name === 'city_description_en') {
      toggleCityDescEnForm()
    }
    if (e.target[0].name === 'city_title_fr') {
      toggleCityTitleForm()
    }
    if (e.target[0].name === 'city_title_en') {
      toggleCityTitleEnForm()
    }
    if (e.target[0].name === 'city_photo') {
      toggleCityPhotoForm()
    }
    if (e.target[0].name === 'city_legende_photo_fr') {
      toggleCityLegPhotoForm()
    }
    if (e.target[0].name === 'city_legende_photo_en') {
      toggleCityLegEnPhotoForm()
    }
    if (e.target[0].name === 'city_lien') {
      toggleCityLienForm()
    }
    if (e.target[0].name === 'city_longitude') {
      toggleCityLongForm()
    }
    if (e.target[0].name === 'city_latitude') {
      toggleCityLatForm()
    }
  }

  return (
    <>
      <AdminMenu />(
      {city[0] ? (
        // Form
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
            <li className='admin-details-city-item'>
              <span>Légende Photo</span> : {city[0].city_legende_photo_fr}
              <button
                onClick={toggleCityLegPhotoForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Légende Photo Anglais</span> :
              {city[0].city_legende_photo_en}
              <button
                onClick={toggleCityLegEnPhotoForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Lien</span> :{city[0].city_lien}
              <button
                onClick={toggleCityLienForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Longitude</span> :{city[0].city_longitude}
              <button
                onClick={toggleCityLongForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Latitude</span> :{city[0].city_latitude}
              <button
                onClick={toggleCityLatForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
          </ul>
        </div>
      ) : null}
      ){/* Modal for CityName */}
      <Modal
        isShowing={isCityNameFormShowed}
        hide={toggleCityNameForm}
        title='Modifier le nom'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              name='city_name'
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
      {/* Modal for Description fr */}
      <Modal
        isShowing={isCityDescFormShowed}
        hide={toggleCityDescForm}
        title='Modifier la description'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <textarea
              type='text'
              placeholder='modifier ici'
              name='city_description_fr'
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
      {/* Modal for Description en */}
      <Modal
        isShowing={isCityDescEnFormShowed}
        hide={toggleCityDescEnForm}
        title='Modifier la description en anglais'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <textarea
              type='text'
              placeholder='modifier ici'
              name='city_description_en'
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
      {/* Modal for Title fr */}
      <Modal
        isShowing={isCityTitleFormShowed}
        hide={toggleCityTitleForm}
        title='Modifier le titre'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              name='city_title_fr'
              onChange={e => setCityTitle(e.target.value)}
              value={cityTitle}
            />
          </div>
          <div className='form-group'>
            <button type='submit' value='Envoyer'>
              Envoyer
            </button>
          </div>
        </form>
      </Modal>
      {/* Modal for Title en */}
      <Modal
        isShowing={isCityTitleEnFormShowed}
        hide={toggleCityTitleEnForm}
        title='Modifier le titre en anglais'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              name='city_title_en'
              onChange={e => setCitytitleEn(e.target.value)}
              value={cityTitleEn}
            />
          </div>
          <div className='form-group'>
            <button type='submit' value='Envoyer'>
              Envoyer
            </button>
          </div>
        </form>
      </Modal>
      {/* Modal for Photo */}
      <Modal
        isShowing={isCityPhotoFormShowed}
        hide={toggleCityPhotoForm}
        title='Modifier la photo'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              name='city_photo'
              onChange={e => setCityPhoto(e.target.value)}
              value={cityPhoto}
            />
          </div>
          <div className='form-group'>
            <button type='submit' value='Envoyer'>
              Envoyer
            </button>
          </div>
        </form>
      </Modal>
      {/* Modal for photo Legend*/}
      <Modal
        isShowing={isCityLegPhotoFormShowed}
        hide={toggleCityLegPhotoForm}
        title='Modifier la Légende de la photo'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              name='city_legende_photo_fr'
              onChange={e => setCityLegPhoto(e.target.value)}
              value={cityLegPhoto}
            />
          </div>
          <div className='form-group'>
            <button type='submit' value='Envoyer'>
              Envoyer
            </button>
          </div>
        </form>
      </Modal>
      {/* Modal for photo Legend En*/}
      <Modal
        isShowing={isCityLegPhotoEnFormShowed}
        hide={toggleCityLegEnPhotoForm}
        title='Modifier la Légende de la photo'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              name='city_legende_photo_en'
              onChange={e => setCityLegPhotoEn(e.target.value)}
              value={cityLegPhotoEn}
            />
          </div>
          <div className='form-group'>
            <button type='submit' value='Envoyer'>
              Envoyer
            </button>
          </div>
        </form>
      </Modal>
      {/* Modal for Link*/}
      <Modal
        isShowing={isCityLienFormShowed}
        hide={toggleCityLienForm}
        title='Modifier lien'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              name='city_lien'
              onChange={e => setCityLien(e.target.value)}
              value={cityLien}
            />
          </div>
          <div className='form-group'>
            <button type='submit' value='Envoyer'>
              Envoyer
            </button>
          </div>
        </form>
      </Modal>
      {/* Modal for Longitude*/}
      <Modal
        isShowing={isCityLongFormShowed}
        hide={toggleCityLongForm}
        title='Modifier longitude'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              name='city_longitude'
              onChange={e => setCityLongitude(e.target.value)}
              value={cityLongitude}
            />
          </div>
          <div className='form-group'>
            <button type='submit' value='Envoyer'>
              Envoyer
            </button>
          </div>
        </form>
      </Modal>
      {/* Modal for Latitude*/}
      <Modal
        isShowing={isCityLatFormShowed}
        hide={toggleCityLatForm}
        title='Modifier latitude'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              name='city_latitude'
              onChange={e => setCityLatitude(e.target.value)}
              value={cityLatitude}
            />
          </div>
          <div className='form-group'>
            <button type='submit' value='Envoyer'>
              Envoyer
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AdminDetailsCity
