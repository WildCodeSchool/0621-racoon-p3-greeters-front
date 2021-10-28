import { useEffect, useState } from 'react/cjs/react.development'
import { FaCity } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import 'boxicons'

import AdminMenu from '../../components/AdminMenu/AdminMenu'

import './CitiesList.css'

const CitiesList = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get(`${process.env.REACT_APP_API_ROUTE}/city`)
      setCities(resData.data)
    }
    getData()
  }, [])

  return (
    <>
      <AdminMenu />
      <div className='cities-list-container'>
        <h1 className='cities-list-title'>
          <FaCity /> <span className='h1-title'>Villes</span>
        </h1>
        <table className='cities-table'>
          <thead>
            <tr className='cities-row'>
              <th colSpan='2'>Nom</th>
            </tr>
          </thead>
          <tbody>
            {cities
              ? cities.map(c => (
                  <tr key={c.city_id}>
                    <td colSpan='2' className='cities-item'>
                      {c.city_name}
                    </td>
                    <td>
                      <NavLink to={`/admin/details-city/${c.city_id}`}>
                        <button className='admin-icon-btn'>
                          <box-icon
                            type='solid'
                            name='edit-alt'
                            className='cities-icon'
                          ></box-icon>
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CitiesList
