import { Link } from 'react-router-dom'
import AdminMenu from '../../components/AdminMenu/AdminMenu'

import './AdminContent.css'

const AdminContent = () => {
  return (
    <>
      <AdminMenu />

      <div className='AdminContent-container'>
        <h1 className='AdminContent-big-title'>Contenu</h1>
        <Link to='/admin/content/description'>
          <section className='AdminContent-section up-section'>
            <h2 className='AdminContent-title'>Qu'est ce qu'un Greeter</h2>
            <h3 className='AdminHome-litle-title'>
              Page de description des Greeters
            </h3>
          </section>
        </Link>
        <Link to='/admin/content/values'>
          <section className='AdminContent-section layer3-section'>
            <h2 className='AdminContent-title'>Nos valeurs</h2>
            <h3 className='AdminHome-litle-title'>
              Page de description des valeurs d'un Greeter
            </h3>
          </section>
        </Link>
        <Link to='/admin/content/concept'>
          <section className='AdminContent-section layer2-section'>
            <h2 className='AdminContent-title'>Concept des Greeters</h2>
            <h3 className='AdminHome-litle-title'>
              Page de description du concept des Greeters
            </h3>
          </section>
        </Link>
        <Link to='/admin/list-greeters'>
          <section className='AdminContent-section down-section'>
            <h2 className='AdminContent-title'>Profil d'un Greeter</h2>
            <h3 className='AdminContent-litle-title'>
              Page d'information personnelle d'un Greeter
            </h3>
          </section>
        </Link>
      </div>
    </>
  )
}

export default AdminContent
