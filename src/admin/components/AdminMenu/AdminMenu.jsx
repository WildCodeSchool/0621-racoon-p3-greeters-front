import { NavLink } from 'react-router-dom'
import { FaCity, FaBook } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { RiComputerLine, RiAdminLine } from 'react-icons/ri'
import { HiOutlineLogin } from 'react-icons/hi'

import './AdminMenu.css'

function AdminMenu() {
  return (
    <div className='sidebar'>
      <ul className='nav-links'>
        <li>
          <span className='returnButton'>
            <HiOutlineLogin />
          </span>
          <span className='adminTitle'>Partie Administration</span>
        </li>
        <NavLink to='/admin'>
          <li>
            <RiComputerLine />
            &nbsp;&nbsp;Vue d'ensemble
          </li>
        </NavLink>
        <NavLink to='/admin/content'>
          <li>
            <FaBook />
            &nbsp;&nbsp;Contenu
          </li>
        </NavLink>
        <NavLink to='/admin/list-greeters'>
          <li>
            <ImProfile />
            &nbsp;&nbsp;Greeters
          </li>
        </NavLink>
        <NavLink to='/admin/list-cities'>
          <li>
            <FaCity />
            &nbsp;&nbsp;Villes
          </li>
        </NavLink>
        <NavLink to='#'>
          <li>
            <RiAdminLine />
            &nbsp;&nbsp;Administration
          </li>
        </NavLink>
      </ul>
    </div>
  )
}
export default AdminMenu
