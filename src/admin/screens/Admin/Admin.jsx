import { FaCity, FaBook } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { Link } from 'react-router-dom'
import { RiComputerLine, RiAdminLine } from 'react-icons/ri'

import AdminMenu from '../../components/AdminMenu/AdminMenu'

import './Admin.css'

const Admin = () => {
  return (
    <>
      <AdminMenu />
      <div className='AdminHome-container'>
        <h1 className='AdminHome-big-title'>
          <RiComputerLine /> <span className='h1-title'>Vue d'ensemble</span>
        </h1>
        <Link to='/admin/content'>
          <section className='AdminHome-section up-section'>
            <h2 className='AdminHome-title'>
              <FaBook /> <span className='h2-title'>Contenu</span>
            </h2>
            <h3 className='AdminHome-litle-title'>
              Gestion du contenu des pages du site
            </h3>
          </section>
        </Link>
        <Link to='/admin/list-greeters'>
          <section className='AdminHome-section layer3-section'>
            <h2 className='AdminHome-title'>
              <ImProfile /> <span className='h2-title'>Greeters</span>
            </h2>
            <h3 className='AdminHome-litle-title'>
              Gestion des profils des Greeters
            </h3>
          </section>
        </Link>
        <Link to='/admin/list-cities'>
          <section className='AdminHome-section layer2-section'>
            <h2 className='AdminHome-title'>
              <FaCity /> <span className='h2-title'>Villes</span>
            </h2>
            <h3 className='AdminHome-litle-title'>
              Gestion des villes des Greeters
            </h3>
          </section>
        </Link>
        <Link to='#'>
          <section className='AdminHome-section down-section'>
            <h2 className='AdminHome-title'>
              <RiAdminLine /> <span className='h2-title'>Administration</span>
            </h2>
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
