import { NavLink } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <div className='sidebar'>
      <ul className='nav-links'>
        <li>
          <span className='link_name'>Vue d'ensemble</span>
        </li>
        <li>
          <div className='icon_link'>
            <NavLink to=
              <span className='link_name'>Contenu</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div className='icon_link'>
            <NavLink to=
              <span className='link_name'>Membres</span>
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink to=
            <span className='link_name'>Villes</span>
          </NavLink>
        </li>
        <li>
          <NavLink to=
            <span className='link_name'>Administration</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
export default Menu
