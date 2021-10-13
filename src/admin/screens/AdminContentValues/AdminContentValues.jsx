import AdminMenu from '../../components/AdminMenu/AdminMenu'
import useModal from '../../components/CustomHooks/UseModal'
import Modal from '../../components/Modal/Modal'
import axios from 'axios'
import 'boxicons'

import { useEffect, useState } from 'react'

import './AdminContentValues.css'

const AdminContentPage = () => {
  const [values, setValues] = useState([])

  const [valuesTitle1Fr, setValuesTitle1Fr] = useState('')
  const [valuesTitle1En, setValuesTitle1En] = useState([])
  const [valuesTitle2Fr, setValuesTitle2Fr] = useState([])
  const [valuesTitle2En, setValuesTitle2En] = useState([])
  const [valuesContentFr, setValuesContentFr] = useState([])
  const [valuesContentEn, setValuesContentEn] = useState([])
  const [valuesPhoto, setValuesPhoto] = useState([])
  // import modal for values

  const {
    isShowing: isValuesTitle1FrFormShowed,
    toggle: toggleValuesTitle1FrForm
  } = useModal()
  const {
    isShowing: isValuesTitle1EnFormShowed,
    toggle: toggleValuesTitle1EnForm
  } = useModal()
  const {
    isShowing: isValuesTitle2FrFormShowed,
    toggle: toggleValuesTitle2FrForm
  } = useModal()
  const {
    isShowing: isValuesTitle2EnFormShowed,
    toggle: toggleValuesTitle2EnForm
  } = useModal()
  const {
    isShowing: isValuesContentFrFormShowed,
    toggle: toggleValuesContentFrForm
  } = useModal()
  const {
    isShowing: isValuesContentEnFormShowed,
    toggle: toggleValuesContentEnForm
  } = useModal()
  const { isShowing: isValuesPhotoFormShowed, toggle: toggleValuesPhotoForm } =
    useModal()

  //Get data from back
  const getData = async () => {
    const resData = await axios.get(`http://localhost:3000/values`)
    setValues(resData.data)
  }
  useEffect(() => {
    getData()
  }, [])

  // Put routes
  const putTitle1FrData = async () => {
    const results = await axios.put(`http://localhost:3000/values`, {
      values_title1_fr: valuesTitle1Fr
    })
    getData()
  }

  const putTitle1EnData = async () => {
    const results = await axios.put(`http://localhost:3000/values`, {
      values_title1_en: valuesTitle1En
    })
    getData()
  }

  const putTitle2FrData = async () => {
    const results = await axios.put(`http://localhost:3000/values`, {
      values_title2_fr: valuesTitle2Fr
    })
    getData()
  }

  const putTitle2EnData = async () => {
    const results = await axios.put(`http://localhost:3000/values`, {
      values_title2_en: valuesTitle2En
    })
    getData()
  }

  const putContentFrData = async () => {
    const results = await axios.put(`http://localhost:3000/values`, {
      values_content_fr: valuesContentFr
    })
    getData()
  }

  const putContentEnData = async () => {
    const results = await axios.put(`http://localhost:3000/values`, {
      values_content_en: valuesContentEn
    })
    getData()
  }

  const putPhotoData = async () => {
    const results = await axios.put(`http://localhost:3000/values`, {
      values_photo: valuesPhoto
    })
    getData()
  }

  const handleSubmitTitle1Fr = e => {
    e.preventDefault()
    putTitle1FrData()
    toggleValuesTitle1FrForm()
  }

  const handleSubmitTitle1En = e => {
    e.preventDefault()
    putTitle1EnData()
    toggleValuesTitle1EnForm()
  }

  const handleSubmitTitle2Fr = e => {
    e.preventDefault()
    putTitle2FrData()
    toggleValuesTitle2FrForm()
  }

  const handleSubmitTitle2En = e => {
    e.preventDefault()
    putTitle2EnData()
    toggleValuesTitle2EnForm()
  }

  const handleSubmitContentFr = e => {
    e.preventDefault()
    putContentFrData()
    toggleValuesContentFrForm()
  }

  const handleSubmitContentEn = e => {
    e.preventDefault()
    putContentEnData()
    toggleValuesContentEnForm()
  }

  const handleSubmitPhoto = e => {
    e.preventDefault()
    putPhotoData()
    toggleValuesPhotoForm()
  }

  return (
    <>
      <AdminMenu />
      {values[0] ? (
        <div className='admin-details-city-container'>
          <h1 className='admin-details-city-title'>Page values</h1>
          <ul className='admin-details-city-list'>
            <li className='admin-details-city-item'>
              <span>Titre en français</span> : {values[0].values_title1_fr}
              <button
                onClick={toggleValuesTitle1FrForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Titre en anglais</span> : {values[0].values_title1_en}
              <button
                onClick={toggleValuesTitle1EnForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Sous-titre en français</span> : {values[0].values_title2_fr}
              <button
                onClick={toggleValuesTitle2FrForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Sous-titre en anglais</span> : {values[0].values_title2_en}
              <button
                onClick={toggleValuesTitle2EnForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Paragraphe en français</span> :{' '}
              {values[0].values_content_fr}
              <button
                onClick={toggleValuesContentFrForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Paragraphe en anglais</span> : {values[0].values_content_en}
              <button
                onClick={toggleValuesContentEnForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Photo</span> : {values[0].values_photo}
              <button
                onClick={toggleValuesPhotoForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
          </ul>
        </div>
      ) : null}
      <Modal
        isShowing={isValuesTitle1FrFormShowed}
        hide={toggleValuesTitle1FrForm}
        title='Modifier le titre'
      >
        <form onSubmit={handleSubmitTitle1Fr}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setValuesTitle1Fr(e.target.value)}
              value={valuesTitle1Fr}
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
        isShowing={isValuesTitle1EnFormShowed}
        hide={toggleValuesTitle1EnForm}
        title='Modifier le titre'
      >
        <form onSubmit={handleSubmitTitle1En}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setValuesTitle1En(e.target.value)}
              value={valuesTitle1En}
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
        isShowing={isValuesTitle2FrFormShowed}
        hide={toggleValuesTitle2FrForm}
        title='Modifier le sous-titre'
      >
        <form onSubmit={handleSubmitTitle2Fr}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setValuesTitle2Fr(e.target.value)}
              value={valuesTitle2Fr}
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
        isShowing={isValuesTitle2EnFormShowed}
        hide={toggleValuesTitle2EnForm}
        title='Modifier le sous-titre'
      >
        <form onSubmit={handleSubmitTitle2En}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setValuesTitle2En(e.target.value)}
              value={valuesTitle2En}
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
        isShowing={isValuesContentFrFormShowed}
        hide={toggleValuesContentFrForm}
        title='Modifier le paragraphe'
      >
        <form onSubmit={handleSubmitContentFr}>
          <div className='form-group'>
            <textarea
              type='text'
              placeholder='modifier ici'
              onChange={e => setValuesContentFr(e.target.value)}
              value={valuesContentFr}
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
        isShowing={isValuesContentEnFormShowed}
        hide={toggleValuesContentEnForm}
        title='Modifier le paragraphe'
      >
        <form onSubmit={handleSubmitContentEn}>
          <div className='form-group'>
            <textarea
              type='text'
              placeholder='modifier ici'
              onChange={e => setValuesContentEn(e.target.value)}
              value={valuesContentEn}
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
        isShowing={isValuesPhotoFormShowed}
        hide={toggleValuesPhotoForm}
        title='Modifier la photo'
      >
        <form onSubmit={handleSubmitPhoto}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setValuesPhoto(e.target.value)}
              value={valuesPhoto}
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

export default AdminContentPage
