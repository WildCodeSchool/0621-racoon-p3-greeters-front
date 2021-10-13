import AdminMenu from '../../components/AdminMenu/AdminMenu'
import useModal from '../../components/CustomHooks/UseModal'
import Modal from '../../components/Modal/Modal'
import axios from 'axios'
import 'boxicons'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import './AdminDetailsGreeter.css'

const AdminDetailsGreeter = () => {
  // state for send greeter id

  const [greeters, setGreeters] = useState([])

  // states for modal

  const [greeterName, setGreeterName] = useState('')
  const [greeterCatch, setGreeterCatch] = useState([])
  const [greeterCatchEn, setGreeterCatchEn] = useState([])
  const [greeterDesc, setGreeterDesc] = useState([])
  const [greeterDescEn, setGreeterDescEn] = useState([])
  const [greeterCity, setGreeterCity] = useState([])
  const [greeterLang, setGreeterLang] = useState([])
  const [greeterThem, setGreeterThem] = useState([])
  const [greeterPhoto, setGreeterPhoto] = useState([])

  // import modal for city

  const { isShowing: isGreeterNameFormShowed, toggle: toggleGreeterNameForm } =
    useModal()
  const {
    isShowing: isGreeterCatchFormShowed,
    toggle: toggleGreeterCatchForm
  } = useModal()
  const {
    isShowing: isGreeterCatchEnFormShowed,
    toggle: toggleGreeterCatchEnForm
  } = useModal()
  const { isShowing: isGreeterDescFormShowed, toggle: toggleGreeterDescForm } =
    useModal()
  const {
    isShowing: isGreeterDescEnFormShowed,
    toggle: toggleGreeterDescEnForm
  } = useModal()
  const { isShowing: isGreeterCityFormShowed, toggle: toggleGreeterCityForm } =
    useModal()
  const { isShowing: isGreeterLangFormShowed, toggle: toggleGreeterLangForm } =
    useModal()
  const { isShowing: isGreeterThemFormShowed, toggle: toggleGreeterThemForm } =
    useModal()
  const {
    isShowing: isGreeterPhotoFormShowed,
    toggle: toggleGreeterPhotoForm
  } = useModal()

  // params for recup greeter id from url

  let { greeterId } = useParams()

  // fetch data from backend

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const resData = await axios.get(`http://localhost:3000/person/${greeterId}`)
    setGreeters(resData.data.result)
    // console.log(greeters)
  }

  // function to send modified entriezzz dinamicallyy

  const putData = async (name, value) => {
    await axios.put(`http://localhost:3000/person/${greeterId}`, {
      [name]: value
    })
    getData()
  }

  // on click submit with all modalzz

  const handleSubmit = e => {
    e.preventDefault()
    putData(e.target[0].name, e.target[0].value)
    if (e.target[0].name === 'person_firstname') toggleGreeterNameForm()
    if (e.target[0].name === 'person_catch_phrase_fr') toggleGreeterCatchForm()
    if (e.target[0].name === 'person_catch_phrase_en')
      toggleGreeterCatchEnForm()
    if (e.target[0].name === 'person_description_fr') toggleGreeterDescForm()
    if (e.target[0].name === 'person_description_en') toggleGreeterDescEnForm()
    if (e.target[0].name === 'city_name') toggleGreeterCityForm()
    if (e.target[0].name === 'person_them?') toggleGreeterThemForm()
    if (e.target[0].name === 'person_lang?') toggleGreeterLangForm()
    if (e.target[0].name === 'person_photo') toggleGreeterPhotoForm()
  }

  return (
    <>
      <AdminMenu />
      {greeters[0] && (
        <div className='admin-details-greeter-container'>
          <h1 className='admin-details-greeter-title'>Greeter</h1>
          <ul className='admin-details-greeter-list'>
            <li className='admin-details-greeter-item'>
              <span>Prénom</span> :
              <button
                onClick={toggleGreeterNameForm}
                className='admin-details-icon-btn'
              >
                <box-icon type='solid' name='edit-alt' />
              </button>
              {greeters[0].person_firstname}
            </li>
            <li className='admin-details-greeter-item'>
              <span>Phrase d'accroche</span> :{' '}
              <button
                onClick={toggleGreeterCatchForm}
                className='admin-details-icon-btn'
              >
                <box-icon type='solid' name='edit-alt' />
              </button>
              {greeters[0].person_catch_phrase_fr}
            </li>
            <li className='admin-details-greeter-item'>
              <span>Phrase d'accroche en anglais</span> :{' '}
              <button
                onClick={toggleGreeterCatchEnForm}
                className='admin-details-icon-btn'
              >
                <box-icon type='solid' name='edit-alt' />
              </button>
              {greeters[0].person_catch_phrase_en}
            </li>
            <li className='admin-details-greeter-item'>
              <span>Descriptif</span> :
              <button
                onClick={toggleGreeterDescForm}
                className='admin-details-icon-btn'
              >
                <box-icon type='solid' name='edit-alt' />
              </button>
              {greeters[0].person_description_fr}
            </li>
            <li className='admin-details-greeter-item'>
              <span>Descriptif en anglais</span> :{' '}
              <button
                onClick={toggleGreeterDescEnForm}
                className='admin-details-icon-btn'
              >
                <box-icon type='solid' name='edit-alt' />
              </button>
              {greeters[0].person_description_en}
            </li>
            <li className='admin-details-greeter-item'>
              <span>Ville</span> :
              <button
                onClick={toggleGreeterCityForm}
                className='admin-details-icon-btn'
              >
                <box-icon type='solid' name='edit-alt' />
              </button>
              {greeters[0].city_name}
            </li>
            <li className='admin-details-greeter-item'>
              {' '}
              <span>Langues</span> :{' '}
              <button
                onClick={toggleGreeterLangForm}
                className='admin-details-icon-btn'
              >
                <box-icon type='solid' name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-greeter-item'>
              {' '}
              <span>Thématiques</span> :{' '}
              <button
                onClick={toggleGreeterThemForm}
                className='admin-details-icon-btn'
              >
                <box-icon type='solid' name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-greeter-item'>
              <span>Photo</span> : {greeters[0].person_photo}
              <button
                onClick={toggleGreeterPhotoForm}
                className='admin-details-icon-btn'
              >
                <box-icon type='solid' name='edit-alt' />
              </button>
            </li>
          </ul>
        </div>
      )}

      <Modal
        isShowing={isGreeterNameFormShowed}
        hide={toggleGreeterNameForm}
        title='Modifier le nom'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              value={greeterName}
              placeholder='modifier'
              type='text'
              name='person_firstname'
              onChange={e => setGreeterName(e.target.value)}
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
        isShowing={isGreeterCatchFormShowed}
        hide={toggleGreeterCatchForm}
        title="Modifier la phrase d'accroche"
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <textarea
              value={greeterCatch}
              type='text'
              cols='55'
              name='person_catch_phrase_fr'
              onChange={e => setGreeterCatch(e.target.value)}
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
        isShowing={isGreeterCatchEnFormShowed}
        hide={toggleGreeterCatchEnForm}
        title="Modifier la phrase d'accroche en anglais"
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <textarea
              value={greeterCatchEn}
              type='text'
              cols='55'
              name='person_catch_phrase_en'
              onChange={e => setGreeterCatchEn(e.target.value)}
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
        isShowing={isGreeterDescFormShowed}
        hide={toggleGreeterDescForm}
        title='Modifier la description'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <textarea
              value={greeterDesc}
              type='text'
              name='person_description_fr'
              onChange={e => setGreeterDesc(e.target.value)}
              cols='55'
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Envoyer' />
          </div>
        </form>
      </Modal>
      <Modal
        isShowing={isGreeterDescEnFormShowed}
        hide={toggleGreeterDescEnForm}
        title='Modifier la description en anglais'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <textarea
              value={greeterDescEn}
              type='text'
              name='person_description_en'
              onChange={e => setGreeterDescEn(e.target.value)}
              cols='55'
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Envoyer' />
          </div>
        </form>
      </Modal>
      <Modal
        isShowing={isGreeterCityFormShowed}
        hide={toggleGreeterCityForm}
        title='Modifier la ville'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              value={greeterCity}
              type='text'
              placeholder='modifier ici'
              onChange={e => setGreeterCity(e.target.value)}
              name='person_city_id'
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Envoyer' />
          </div>
        </form>
      </Modal>
      <Modal
        isShowing={isGreeterLangFormShowed}
        hide={toggleGreeterLangForm}
        title='Modifier la langue'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              value={greeterLang}
              name='person_lang?'
              type='text'
              onChange={e => setGreeterLang(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Envoyer' />
          </div>
        </form>
      </Modal>
      <Modal
        isShowing={isGreeterThemFormShowed}
        hide={toggleGreeterThemForm}
        title='Modifier les thématiques'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <textarea
              value={greeterThem}
              name='person_them?'
              type='text'
              onChange={e => setGreeterThem(e.target.value)}
              cols='55'
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Envoyer' />
          </div>
        </form>
      </Modal>
      <Modal
        isShowing={isGreeterPhotoFormShowed}
        hide={toggleGreeterPhotoForm}
        title='Modifier la photo'
      >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              name='person_photo'
              type='text'
              value={greeterPhoto}
              onChange={e => setGreeterPhoto(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Envoyer' />
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AdminDetailsGreeter
