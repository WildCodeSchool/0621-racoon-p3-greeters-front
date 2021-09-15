import './Navbar.css'
import logo from '../../assets/greeters-logo-red.PNG'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className='Navbar'>
      {/* Fixed Menu */}
      <div className='nav-close'>
        <div className='nav-element'>
          <span className='nav-menu-button' onClick={() => handleShowMenu()}>
            &#9776;
          </span>
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

      {/* Dynamic Menu */}

      <div className={showMenu ? 'nav-open toShow' : 'nav-open toHide'}>
        <NavLink to='/greeters'>
          <h3>Qu'est ce qu'un greeter ?</h3>
        </NavLink>

        <NavLink to='/our-values'>
          <h3>Nos valeurs</h3>
        </NavLink>

        <NavLink to='/meet-greeter'>
          <h3>Rencontrer un greeter</h3>
        </NavLink>

        <NavLink to='/opinions'>
          <h3>Avis</h3>
        </NavLink>

        <NavLink to='/booking'>
          <h3>Réserver un greeter</h3>
        </NavLink>

        <NavLink to='/contact'>
          <h3>Nous contacter</h3>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
