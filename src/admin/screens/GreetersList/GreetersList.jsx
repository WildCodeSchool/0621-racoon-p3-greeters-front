import { useEffect, useState } from 'react/cjs/react.development'
import { NavLink } from 'react-router-dom'

import AdminMenu from '../../components/AdminMenu/AdminMenu'
import './GreetersList.css'

import axios from 'axios'
import 'boxicons'

const GreetersList = () => {
  const [greeters, setGreeters] = useState([])
  //Get greeters from database
  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/person')
      setGreeters(resData.data.result)
    }
    getData()
  }, [])

  // console.log(greeters)

  return (
    <>
      <AdminMenu />
      <div className='greeters-list-container'>
        <h1 className='greeters-list-title'>Greeters</h1>
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
      </div>
    </>
  )
}

export default GreetersList
