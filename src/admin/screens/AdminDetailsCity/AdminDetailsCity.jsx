import AdminMenu from '../../components/AdminMenu/AdminMenu'
import useModal from '../../components/CustomHooks/UseModal'
import Modal from '../../components/Modal/Modal'
import axios from 'axios'
import 'boxicons'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import './AdminDetailsCity.css'

const AdminDetailsCity = () => {
  const [city, setCity] = useState([])

  //

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

  let { cityId } = useParams()

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get(`http://localhost:3000/city/${cityId}`)
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
              <span>Description en anglais</span> :{' '}
              <button
                onClick={toggleCityDescEnForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
              {city[0].city_description_en}
              <button
                // onClick={toggleCityForm}
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
      )}
      <Modal
        isShowing={isCityNameFormShowed}
        hide={toggleCityNameForm}
        title='Modifier le nom'
      >
        <form>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => console.log(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Envoyer' />
          </div>
        </form>
      </Modal>
      <Modal
        isShowing={isCityDescFormShowed}
        hide={toggleCityDescForm}
        title='Modifier la description'
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
        isShowing={isCityDescEnFormShowed}
        hide={toggleCityDescEnForm}
        title='Modifier la description en anglais'
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
