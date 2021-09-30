import { NavLink } from 'react-router-dom'

import AdminEditor from '../../components/Editor/AdminEditor'

import './AdminContent.css'

const AdminContent = () => {
  return (
    <div className='AdminContent-Container'>
      <h2 AdminContent-Title>Contenu</h2>
      <nav>
        <ul>
          <li>
            <NavLink exact to='/admin/content/page?page=concept'>
              Qu'est ce qu'un Greeter
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/admin/content/page?page=rencontre'>
              Rencontrer un Greeter
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/admin/content/page?page=profil'>
              Profil d'un Greeter
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/admin/content/page?page=contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AdminContent
