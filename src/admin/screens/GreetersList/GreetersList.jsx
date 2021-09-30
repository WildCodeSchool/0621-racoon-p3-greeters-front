import { useEffect, useState } from 'react/cjs/react.development'
import { NavLink } from 'react-router-dom'

import axios from 'axios'

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

  console.log(greeters)

  return (
    <>
      <h1>Greeters</h1>
      <table>
        <thead>
          <tr>
            <th colSpan='2'>Prénom</th>
            <th colSpan='2'>Ville</th>
          </tr>
        </thead>
        {/* Map into data to create a row for each greeter */}
        <tbody>
          {greeters[1]
            ? greeters.map(g => (
                <tr key={g.person_id}>
                  <td colSpan='2'>{g.person_firstname}</td>
                  <td colSpan='2'>{g.city_name}</td>
                  <td>
                    <NavLink to={`/admin/details-greeter/${g.person_id}`}>
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

export default GreetersList
