import { NavLink } from 'react-router-dom'
import './AdminMenu.css'

function AdminMenu() {
  return (
    <div className='sidebar'>
      <ul className='nav-links'>
        <NavLink to='/admin'>
          <li>Vue d'ensemble</li>
        </NavLink>
        <NavLink to='/admin/content'>
          <li>Contenu</li>
        </NavLink>
        <NavLink to='/admin/list-greeters'>
          <li>Greeters</li>
        </NavLink>
        <NavLink to='/admin/list-cities'>
          <li>Villes</li>
        </NavLink>
        <NavLink to='#'>
          <li>Administration</li>
        </NavLink>
      </ul>
    </div>
  )
}
export default AdminMenu
