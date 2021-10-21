import { useEffect, useState } from 'react'

import AdminMenu from '../../components/AdminMenu/AdminMenu'
import Modal from '../../components/Modal/Modal'
import useModal from '../../components/CustomHooks/UseModal'

import axios from 'axios'
import 'boxicons'

import './AdminContentConcept.css'

const AdminContentConcept = () => {
  const [concept, setConcept] = useState([])

  const [conceptTitle1Fr, setConceptTitle1Fr] = useState('')
  const [conceptTitle1En, setConceptTitle1En] = useState([])
  const [conceptTitle2Fr, setConceptTitle2Fr] = useState([])
  const [conceptTitle2En, setConceptTitle2En] = useState([])
  const [conceptTitle3Fr, setConceptTitle3Fr] = useState([])
  const [conceptTitle3En, setConceptTitle3En] = useState([])
  const [conceptContentFr, setConceptContentFr] = useState([])
  const [conceptContentEn, setConceptContentEn] = useState([])
  const [conceptPhoto, setConceptPhoto] = useState([])
  // import modal for concept

  const {
    isShowing: isconceptTitle1FrFormShowed,
    toggle: toggleconceptTitle1FrForm
  } = useModal()
  const {
    isShowing: isconceptTitle1EnFormShowed,
    toggle: toggleconceptTitle1EnForm
  } = useModal()
  const {
    isShowing: isconceptTitle2FrFormShowed,
    toggle: toggleconceptTitle2FrForm
  } = useModal()
  const {
    isShowing: isconceptTitle2EnFormShowed,
    toggle: toggleconceptTitle2EnForm
  } = useModal()
  const {
    isShowing: isconceptTitle3FrFormShowed,
    toggle: toggleconceptTitle3FrForm
  } = useModal()
  const {
    isShowing: isconceptTitle3EnFormShowed,
    toggle: toggleconceptTitle3EnForm
  } = useModal()
  const {
    isShowing: isconceptContentFrFormShowed,
    toggle: toggleconceptContentFrForm
  } = useModal()
  const {
    isShowing: isconceptContentEnFormShowed,
    toggle: toggleconceptContentEnForm
  } = useModal()
  const {
    isShowing: isconceptPhotoFormShowed,
    toggle: toggleconceptPhotoForm
  } = useModal()

  //Get data from back
  const getData = async () => {
    const resData = await axios.get(
      `${process.env.REACT_APP_API_ROUTE}/concept`
    )
    setConcept(resData.data)
  }
  useEffect(() => {
    getData()
  }, [])

  // Put routes
  const putTitle1FrData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/concept`,
      {
        concept_title1_fr: conceptTitle1Fr
      }
    )
    getData()
  }

  const putTitle1EnData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/concept`,
      {
        concept_title1_en: conceptTitle1En
      }
    )
    getData()
  }

  const putTitle2FrData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/concept`,
      {
        concept_title2_fr: conceptTitle2Fr
      }
    )
    getData()
  }

  const putTitle2EnData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/concept`,
      {
        concept_title2_en: conceptTitle2En
      }
    )
    getData()
  }

  const putTitle3FrData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/concept`,
      {
        concept_title3_fr: conceptTitle3Fr
      }
    )
    getData()
  }

  const putTitle3EnData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/concept`,
      {
        concept_title3_en: conceptTitle3En
      }
    )
    getData()
  }

  const putContentFrData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/concept`,
      {
        concept_content_fr: conceptContentFr
      }
    )
    getData()
  }

  const putContentEnData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/concept`,
      {
        concept_content_en: conceptContentEn
      }
    )
    getData()
  }

  const putPhotoData = async () => {
    const results = await axios.put(
      `${process.env.REACT_APP_API_ROUTE}/concept`,
      {
        concept_photo: conceptPhoto
      }
    )
    getData()
  }

  const handleSubmitTitle1Fr = e => {
    e.preventDefault()
    putTitle1FrData()
    toggleconceptTitle1FrForm()
  }

  const handleSubmitTitle1En = e => {
    e.preventDefault()
    putTitle1EnData()
    toggleconceptTitle1EnForm()
  }

  const handleSubmitTitle2Fr = e => {
    e.preventDefault()
    putTitle2FrData()
    toggleconceptTitle2FrForm()
  }

  const handleSubmitTitle2En = e => {
    e.preventDefault()
    putTitle2EnData()
    toggleconceptTitle2EnForm()
  }

  const handleSubmitTitle3Fr = e => {
    e.preventDefault()
    putTitle3FrData()
    toggleconceptTitle3FrForm()
  }

  const handleSubmitTitle3En = e => {
    e.preventDefault()
    putTitle3EnData()
    toggleconceptTitle3EnForm()
  }

  const handleSubmitContentFr = e => {
    e.preventDefault()
    putContentFrData()
    toggleconceptContentFrForm()
  }

  const handleSubmitContentEn = e => {
    e.preventDefault()
    putContentEnData()
    toggleconceptContentEnForm()
  }

  const handleSubmitPhoto = e => {
    e.preventDefault()
    putPhotoData()
    toggleconceptPhotoForm()
  }

  return (
    <>
      <AdminMenu />
      {concept[0] ? (
        <div className='admin-details-city-container'>
          <h1 className='admin-details-city-title'>Page concept</h1>
          <ul className='admin-details-city-list'>
            <li className='admin-details-city-item'>
              <span>Titre en français</span> : {concept[0].concept_title1_fr}
              <button
                onClick={toggleconceptTitle1FrForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Titre en anglais</span> : {concept[0].concept_title1_en}
              <button
                onClick={toggleconceptTitle1EnForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Sous-titre en français</span> :{' '}
              {concept[0].concept_title2_fr}
              <button
                onClick={toggleconceptTitle2FrForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Sous-titre en anglais</span> :{' '}
              {concept[0].concept_title2_en}
              <button
                onClick={toggleconceptTitle2EnForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Sous-titre en français</span> :{' '}
              {concept[0].concept_title3_fr}
              <button
                onClick={toggleconceptTitle3FrForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Sous-titre en anglais</span> :{' '}
              {concept[0].concept_title3_en}
              <button
                onClick={toggleconceptTitle3EnForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Paragraphe en français</span> :{' '}
              {concept[0].concept_content_fr}
              <button
                onClick={toggleconceptContentFrForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Paragraphe en anglais</span> :{' '}
              {concept[0].concept_content_en}
              <button
                onClick={toggleconceptContentEnForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
            <li className='admin-details-city-item'>
              <span>Photo</span> :{' '}
              <img
                className='admin-photo-concept'
                src={concept[0].concept_photo}
                alt=''
              />
              <button
                onClick={toggleconceptPhotoForm}
                className='admin-details-icon-btn'
              >
                <box-icon name='edit-alt' />
              </button>
            </li>
          </ul>
        </div>
      ) : null}
      <Modal
        isShowing={isconceptTitle1FrFormShowed}
        hide={toggleconceptTitle1FrForm}
        title='Modifier le titre'
      >
        <form onSubmit={handleSubmitTitle1Fr}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setConceptTitle1Fr(e.target.value)}
              value={conceptTitle1Fr}
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
        isShowing={isconceptTitle1EnFormShowed}
        hide={toggleconceptTitle1EnForm}
        title='Modifier le titre'
      >
        <form onSubmit={handleSubmitTitle1En}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setConceptTitle1En(e.target.value)}
              value={conceptTitle1En}
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
        isShowing={isconceptTitle2FrFormShowed}
        hide={toggleconceptTitle2FrForm}
        title='Modifier le sous-titre'
      >
        <form onSubmit={handleSubmitTitle2Fr}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setConceptTitle2Fr(e.target.value)}
              value={conceptTitle2Fr}
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
        isShowing={isconceptTitle2EnFormShowed}
        hide={toggleconceptTitle2EnForm}
        title='Modifier le sous-titre'
      >
        <form onSubmit={handleSubmitTitle2En}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setConceptTitle2En(e.target.value)}
              value={conceptTitle2En}
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
        isShowing={isconceptTitle3FrFormShowed}
        hide={toggleconceptTitle3FrForm}
        title='Modifier le sous-titre'
      >
        <form onSubmit={handleSubmitTitle3Fr}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setConceptTitle3Fr(e.target.value)}
              value={conceptTitle3Fr}
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
        isShowing={isconceptTitle3EnFormShowed}
        hide={toggleconceptTitle3EnForm}
        title='Modifier le sous-titre'
      >
        <form onSubmit={handleSubmitTitle3En}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setConceptTitle3En(e.target.value)}
              value={conceptTitle3En}
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
        isShowing={isconceptContentFrFormShowed}
        hide={toggleconceptContentFrForm}
        title='Modifier le paragraphe'
      >
        <form onSubmit={handleSubmitContentFr}>
          <div className='form-group'>
            <textarea
              type='text'
              placeholder='modifier ici'
              onChange={e => setConceptContentFr(e.target.value)}
              value={conceptContentFr}
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
        isShowing={isconceptContentEnFormShowed}
        hide={toggleconceptContentEnForm}
        title='Modifier le paragraphe'
      >
        <form onSubmit={handleSubmitContentEn}>
          <div className='form-group'>
            <textarea
              type='text'
              placeholder='modifier ici'
              onChange={e => setConceptContentEn(e.target.value)}
              value={conceptContentEn}
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
        isShowing={isconceptPhotoFormShowed}
        hide={toggleconceptPhotoForm}
        title='Modifier la photo'
      >
        <form onSubmit={handleSubmitPhoto}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='modifier ici'
              onChange={e => setConceptPhoto(e.target.value)}
              value={conceptPhoto}
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

export default AdminContentConcept
