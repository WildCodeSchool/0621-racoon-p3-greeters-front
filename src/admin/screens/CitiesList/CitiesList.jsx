import { useEffect, useState } from 'react/cjs/react.development'
import { NavLink } from 'react-router-dom'

import AdminMenu from '../../components/AdminMenu/AdminMenu'

import axios from 'axios'
import 'boxicons'
import { FaCity } from 'react-icons/fa'

import './CitiesList.css'

const CitiesList = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/city')
      setCities(resData.data)
    }
    getData()
  }, [])

  // console.log(cities)

  return (
    <>
      <AdminMenu />
      <div className='cities-list-container'>
        <h1 className='cities-list-title'>
          <FaCity /> Villes
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
