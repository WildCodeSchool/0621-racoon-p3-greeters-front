import { useEffect, useState } from 'react/cjs/react.development'
import { NavLink } from 'react-router-dom'

import axios from 'axios'

const CitiesList = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/city')
      setCities(resData.data)
    }
    getData()
  }, [])

  console.log(cities)

  return (
    <>
      <h1>Villes</h1>
      <table>
        <thead>
          <tr>
            <th colSpan='2'>Nom</th>
          </tr>
        </thead>
        <tbody>
          {cities
            ? cities.map(c => (
                <tr key={c.city_id}>
                  <td colSpan='2'>{c.city_name}</td>
                  <td>
                    <NavLink to={`/admin/details-city/${c.city_id}`}>
                      <button>Edit</button>
                    </NavLink>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  )
}

export default CitiesList
