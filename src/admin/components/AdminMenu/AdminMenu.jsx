import { useContext } from 'react'

import { FaCity, FaBook } from 'react-icons/fa'
import { HiOutlineLogin } from 'react-icons/hi'
import { ImProfile } from 'react-icons/im'
import { NavLink, useHistory } from 'react-router-dom'
import { RiComputerLine, RiAdminLine } from 'react-icons/ri'
import Swal from 'sweetalert2'

import { Context } from '../../../context/Context'

import './AdminMenu.css'

function AdminMenu() {
  const { dispatch } = useContext(Context)
  let history = useHistory()

  const handleLogOut = async e => {
    e.preventDefault()
    dispatch({
      type: 'LOGOUT'
    })
    Swal.fire({
      icon: 'warning',
      title: 'Déconnexion',
      confirmButtonColor: 'purple'
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className='sidebar'>
      <ul className='nav-links'>
        <li>
          <span onClick={handleLogOut} className='returnButton'>
            <HiOutlineLogin />
          </span>
          Administration
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
