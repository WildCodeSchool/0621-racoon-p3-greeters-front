import { ImProfile } from 'react-icons/im'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'

import AdminMenu from '../../components/AdminMenu/AdminMenu'
import Modal from '../../components/Modal/Modal'
import useModal from '../../components/CustomHooks/UseModal'

import axios from 'axios'
import 'boxicons'

import './GreetersList.css'

const GreetersList = () => {
  const [greeters, setGreeters] = useState([])
  const [data, setData] = useState({
    person_firstname: '',
    person_catch_phrase_fr: '',
    person_catch_phrase_en: '',
    person_description_fr: '',
    person_description_en: '',
    person_city_id: '',
    thematic_thematic_id: '',
    language_language_id: ''
  })

  const { isShowing: isNewGFormShowed, toggle: toggleNewGForm } = useModal()
  //Get greeters from database
  const getData = async () => {
    const resData = await axios.get(`${process.env.REACT_APP_API_ROUTE}/person`)
    setGreeters(resData.data.result)
  }
  useEffect(() => {
    getData()
  }, [])

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const postData = async () => {
    const result = await axios.post(
      `${process.env.REACT_APP_API_ROUTE}/person`,
      data
    )
    console.log(result)
    getData()
  }

  const handleSubmit = e => {
    e.preventDefault()
    postData()
    toggleNewGForm()
  }

  return (
    <>
      <AdminMenu />
      <div className='greeters-list-container'>
        <h1 className='greeters-list-title'>
          <ImProfile /> <span className='h1-title'>Greeters</span>
        </h1>
        <button onClick={toggleNewGForm}>Ajouter un nouveau Greeter</button>
        <table className='greeters-table'>
          <thead>
            <tr className='greeters-row'>
              <th colSpan='2'>Prénom</th>
              <th colSpan='2'>Ville</th>
            </tr>
          </thead>
          {/* Map into data to create a row for each greeter */}
          <tbody>
            {greeters[1]
              ? greeters.map(g => (
                  <tr key={g.person_id}>
                    <td colSpan='2' className='greeters-item'>
                      {g.person_firstname}
                    </td>
                    <td colSpan='2' className='greeters-item'>
                      {g.city_name}
                    </td>
                    <td>
                      <NavLink to={`/admin/details-greeter/${g.person_id}`}>
                        <button className='admin-icon-btn'>
                          <box-icon type='solid' name='edit-alt'></box-icon>
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        <Modal
          isShowing={isNewGFormShowed}
          hide={toggleNewGForm}
          title='Nouveau Greeter'
        >
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Prénom'
                name='person_firstname'
                onChange={e => handleChange(e)}
                // value={person_firstname}
              />
              <input
                type='text'
                placeholder='Greeter catch phrase fr'
                name='person_catch_phrase_fr'
                onChange={e => handleChange(e)}
                // value={person_firstname}
              />
              <input
                type='text'
                placeholder='Greeter catch phrase en'
                name='person_catch_phrase_en'
                onChange={e => handleChange(e)}
              />
              <input
                type='text'
                placeholder='Greeter description en'
                name='person_description_fr'
                onChange={e => handleChange(e)}
              />
              <input
                type='text'
                placeholder='Greeter description'
                name='person_description_en'
                onChange={e => handleChange(e)}
              />
              <input
                type='text'
                placeholder='Ville'
                name='person_city_id'
                onChange={e => handleChange(e)}
              />
              <input
                type='text'
                placeholder='them'
                name='thematic_thematic_id'
                onChange={e => handleChange(e)}
              />
              <input
                type='text'
                placeholder='lang'
                name='language_language_id'
                onChange={e => handleChange(e)}
              />
            </div>
            <div className='form-group'>
              <button type='submit' value='Envoyer'>
                Envoyer
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  )
}

export default GreetersList
