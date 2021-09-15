import './Navbar.css'
import logo from '../../assets/greeters-logo-red.PNG'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='nav-element'>
        <span className='nav-menu-button'>&#9776;</span>
      </div>

      <div className='nav-element logo-element'>
        <NavLink to='/'>
          <img src={logo} alt='logo' />
        </NavLink>
      </div>

      <div className='nav-element'>
        <div className='nav-sub-element'>
          <button>&#128270;</button>
          <select>
            <option>FR</option>
            <option>EN</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Navbar
