import { Link } from 'react-router-dom'
import AdminMenu from '../../components/AdminMenu/AdminMenu'
import './Admin.css'

const Admin = () => {
  return (
    <>
      <AdminMenu />
      <div className='AdminHome-container'>
        <h1 className='AdminHome-big-title'>Vue d'ensemble</h1>
        <Link to='#'>
          <section className='AdminHome-section'>
            <h2 className='AdminHome-title'>Contenu</h2>
            <h3 className='AdminHome-litle-title'>
              Gestion du contenu des pages du site
            </h3>
          </section>
        </Link>
        <Link to='./admin/details-greeter'>
          <section className='AdminHome-section2'>
            <h2 className='AdminHome-title'>Membres</h2>
            <h3 className='AdminHome-litle-title'>
              Gestion des profils des Greeters
            </h3>
          </section>
        </Link>
        <Link to='./admin/details-city'>
          <section className='AdminHome-section'>
            <h2 className='AdminHome-title'>Villes</h2>
            <h3 className='AdminHome-litle-title'>
              Gestion des villes des Greeters
            </h3>
          </section>
        </Link>
        <Link to='#'>
          <section className='AdminHome-section2'>
            <h2 className='AdminHome-title'>Administration</h2>
            <h3 className='AdminHome-litle-title'>
              Gestion des comptes et droits administrateurs
            </h3>
          </section>
        </Link>
      </div>
    </>
  )
}

export default Admin