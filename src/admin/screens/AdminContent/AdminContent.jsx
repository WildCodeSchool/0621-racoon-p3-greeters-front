import { Link } from 'react-router-dom'
import AdminMenu from '../../components/AdminMenu/AdminMenu'

import AdminEditor from '../../components/Editor/AdminEditor'

import './AdminContent.css'

const AdminContent = () => {
  return (
    <>
      <AdminMenu />

      <div className='AdminContent-container'>
        <h1 className='AdminContent-big-title'>Contenu</h1>
        <Link to='/admin/content/page?page=description'>
          <section className='AdminContent-section up-section'>
            <h2 className='AdminContent-title'>Qu'est ce qu'un Greeter</h2>
            <h3 className='AdminHome-litle-title'>
              Gestion du contenu des pages du site
            </h3>
          </section>
        </Link>
        <Link to='/admin/content/page?page=rencontre'>
          <section className='AdminHome-section middle-section'>
            <h2 className='AdminHome-title'>Rencontrer un Greeter</h2>
            <h3 className='AdminHome-litle-title'>
              Gestion des profils des Greeters
            </h3>
          </section>
        </Link>
        <Link to='/admin/content/page?page=profil'>
          <section className='AdminHome-section down-section'>
            <h2 className='AdminHome-title'>Profil d'un Greeter</h2>
            <h3 className='AdminHome-litle-title'>
              Gestion des villes des Greeters
            </h3>
          </section>
        </Link>
      </div>
    </>
  )
}

export default AdminContent
