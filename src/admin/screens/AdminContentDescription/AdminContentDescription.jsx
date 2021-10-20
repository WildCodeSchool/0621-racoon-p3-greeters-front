import AdminMenu from '../../components/AdminMenu/AdminMenu'
import useModal from '../../components/CustomHooks/UseModal'
import Modal from '../../components/Modal/Modal'
import axios from 'axios'
import 'boxicons'

import { useEffect, useState } from 'react'

import './AdminContentDescription.css'

const AdminContentDescription = () => {
  const [description, setDescription] = useState([])

  const [descriptionTitle1Fr, setDescriptionTitle1Fr] = useState('')
  const [descriptionTitle1En, setDescriptionTitle1En] = useState([])
  const [descriptionTitle2Fr, setDescriptionTitle2Fr] = useState([])
  const [descriptionTitle2En, setDescriptionTitle2En] = useState([])
  const [descriptionContentFr, setDescriptionContentFr] = useState([])
  const [descriptionContentEn, setDescriptionContentEn] = useState([])
  const [descriptionPhoto, setDescriptionPhoto] = useState([])
  // import modal for description

  const {
    isShowing: isDescriptionTitle1FrFormShowed,
    toggle: toggleDescriptionTitle1FrForm
  } = useModal()
  const {
    isShowing: isDescriptionTitle1EnFormShowed,
    toggle: toggleDescriptionTitle1EnForm
  } = useModal()
  const {
    isShowing: isDescriptionTitle2FrFormShowed,
    toggle: toggleDescriptionTitle2FrForm
  } = useModal()
  const {
    isShowing: isDescriptionTitle2EnFormShowed,
    toggle: toggleDescriptionTitle2EnForm
  } = useModal()
  const {
    isShowing: isDescriptionContentFrFormShowed,
    toggle: toggleDescriptionContentFrForm
  } = useModal()
  const {
    isShowing: isDescriptionContentEnFormShowed,
    toggle: toggleDescriptionContentEnForm
  } = useModal()
  const {
    isShowing: isDescriptionPhotoFormShowed,
    toggle: toggleDescriptionPhotoForm
  } = useModal()

  //Get data from back
  const getData = async () => {
    const resData = await axios.get(
      `${process.env.REACT_APP_API_ROUTE}/description`
    )
    setDescription(resData.data)
  }
  useEffect(() => {
    getData()
  }, [])

  // Put routes
  const putTitle1FrData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/description`,
      {
        description_title1_fr: descriptionTitle1Fr
      }
    )
    getData()
  }

  const putTitle1EnData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/description`,
      {
        description_title1_en: descriptionTitle1En
      }
    )
    getData()
  }

  const putTitle2FrData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/description`,
      {
        description_title2_fr: descriptionTitle2Fr
      }
    )
    getData()
  }

  const putTitle2EnData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/description`,
      {
        description_title2_en: descriptionTitle2En
      }
    )
    getData()
  }

  const putContentFrData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/description`,
      {
        description_content_fr: descriptionContentFr
      }
    )
    getData()
  }

  const putContentEnData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/description`,
      {
        description_content_en: descriptionContentEn
      }
    )
    getData()
  }

  const putPhotoData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/description`,
      {
        description_photo: descriptionPhoto
      }
    )
    getData()
  }

  const handleSubmitTitle1Fr = e => {
    e.preventDefault()
    putTitle1FrData()
    toggleDescriptionTitle1FrForm()
  }

  const handleSubmitTitle1En = e => {
    e.preventDefault()
    putTitle1EnData()
    toggleDescriptionTitle1EnForm()
  }

  const handleSubmitTitle2Fr = e => {
    e.preventDefault()
    putTitle2FrData()
    toggleDescriptionTitle2FrForm()
  }

  const handleSubmitTitle2En = e => {
    e.preventDefault()
    putTitle2EnData()
    toggleDescriptionTitle2EnForm()
  }

  const handleSubmitContentFr = e => {
    e.preventDefault()
    putContentFrData()
    toggleDescriptionContentFrForm()
  }

  const handleSubmitContentEn = e => {
    e.preventDefault()
    putContentEnData()
    toggleDescriptionContentEnForm()
  }

  const handleSubmitPhoto = e => {
    e.preventDefault()
    putPhotoData()
    toggleDescriptionPhotoForm()
  }

  return (
    <>
      {console.log('LAAAAA')}
      <AdminMenu />
      {description[0] ? (
        <div className='admin-details-city-container'>
          <h1 className='admin-details-city-title'>Page Description</h1>
          <ul className='admin-details-city-list'>
            <li className='admin-details-city-item'>
              <span>Titre en français</span> :
              {description[0].description_title1_fr}
              <button
                onClick={toggleDescriptionTitle1FrForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Titre en anglais</span> :
              {description[0].description_title1_en}
              <button
                onClick={toggleDescriptionTitle1EnForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Sous-titre en français</span> :
              {description[0].description_title2_fr}
              <button
                onClick={toggleDescriptionTitle2FrForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Sous-titre en anglais</span> :
              {description[0].description_title2_en}
              <button
                onClick={toggleDescriptionTitle2EnForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Paragraphe en français</span> :
              {description[0].description_content_fr}
              <button
                onClick={toggleDescriptionContentFrForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Paragraphe en anglais</span> :
              {description[0].description_content_en}
              <button
                onClick={toggleDescriptionContentEnForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Photo</span> : {description[0].description_photo}
              <button
                onClick={toggleDescriptionPhotoForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
          </ul>
        </div>
      ) : null}
      <Modal
        isShowing={isDescriptionTitle1FrFormShowed}
        hide={toggleDescriptionTitle1FrForm}
        title='Modifier le titre'
      >
        <form onSubmit={handleSubmitTitle1Fr}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setDescriptionTitle1Fr(e.target.value)}
              value={descriptionTitle1Fr}
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
        isShowing={isDescriptionTitle1EnFormShowed}
        hide={toggleDescriptionTitle1EnForm}
        title='Modifier le titre'
      >
        <form onSubmit={handleSubmitTitle1En}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setDescriptionTitle1En(e.target.value)}
              value={descriptionTitle1En}
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
        isShowing={isDescriptionTitle2FrFormShowed}
        hide={toggleDescriptionTitle2FrForm}
        title='Modifier le sous-titre'
      >
        <form onSubmit={handleSubmitTitle2Fr}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setDescriptionTitle2Fr(e.target.value)}
              value={descriptionTitle2Fr}
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
        isShowing={isDescriptionTitle2EnFormShowed}
        hide={toggleDescriptionTitle2EnForm}
        title='Modifier le sous-titre'
      >
        <form onSubmit={handleSubmitTitle2En}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setDescriptionTitle2En(e.target.value)}
              value={descriptionTitle2En}
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
        isShowing={isDescriptionContentFrFormShowed}
        hide={toggleDescriptionContentFrForm}
        title='Modifier le paragraphe'
      >
        <form onSubmit={handleSubmitContentFr}>
          <div className='form-group'>
            <textarea
              type='text'
              placeholder='modifier ici'
              onChange={e => setDescriptionContentFr(e.target.value)}
              value={descriptionContentFr}
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
        isShowing={isDescriptionContentEnFormShowed}
        hide={toggleDescriptionContentEnForm}
        title='Modifier le paragraphe'
      >
        <form onSubmit={handleSubmitContentEn}>
          <div className='form-group'>
            <textarea
              type='text'
              placeholder='modifier ici'
              onChange={e => setDescriptionContentEn(e.target.value)}
              value={descriptionContentEn}
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
        isShowing={isDescriptionPhotoFormShowed}
        hide={toggleDescriptionPhotoForm}
        title='Modifier la photo'
      >
        <form onSubmit={handleSubmitPhoto}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setDescriptionPhoto(e.target.value)}
              value={descriptionPhoto}
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

export default AdminContentDescription
