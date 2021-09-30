import AdminMenu from '../../components/AdminMenu/AdminMenu'

import './AdminDetailsCity.css'

const AdminDetailsCity = () => {
  return (
    <>
      <AdminMenu />

      <div className='admin-details-city-container'>
        <h1 className='admin-details-city-title'>Villes</h1>
        <ul className='admin-details-city-list'>
          <li className='admin-details-city-item'>Nom : </li>
          <li className='admin-details-city-item'>Description : </li>
          <li className='admin-details-city-item'>Titre : </li>
          <li className='admin-details-city-item'>Photo : </li>
        </ul>
      </div>
    </>
  )
}

export default AdminDetailsCity
