import './Navbar.css'
import logo from '../../assets/greeters-logo-red.PNG'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import SearchBar from '../SearchBar/SearchBar'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  /***** Language selection */
  const [language, setLanguage] = useState('fr')

  const handleLanguage = choice => {
    setLanguage(choice)
    language === 'fr'
      ? Swal.fire('Language changed to English')
      : Swal.fire('Langue changée en français')
  }

  /***** Search bar */
  const [searchBar, setSearchBar] = useState(false)

  const handleSearchBar = () => {
    setSearchBar(!searchBar)
  }
  /***** Search value */
  const [searchValue, setSearchValue] = useState('')

  /***** Menu */
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className='Navbar' data-aos='fade-down'>
      {/* Fixed Menu */}
      <div className='nav-close'>
        <div className='logo-element'>
          <NavLink to='/'>
            <img src={logo} alt='logo' />
          </NavLink>
        </div>
        <div className='nav-element'>
          <div
            className={
              showMenu
                ? 'toggle-button toHide-button'
                : 'toggle-button toShow-button'
            }
            onClick={() => handleShowMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='nav-element'>
          <div className='nav-sub-element'>
            {/* searchBar */}
            {searchBar && (
              <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            )}

            <button onClick={handleSearchBar}>&#128270;</button>
            <select
              className='language-button'
              onChange={e => handleLanguage(e.target.value)}
            >
              <option value='fr'>🇫🇷</option>
              <option value='en'>🇬🇧</option>
            </select>
          </div>
        </div>
      </div>

      {/* Dynamic Menu */}

      <div
        className={showMenu ? 'nav-open toShow-menu' : 'nav-open toHide-menu'}
      >
        <NavLink to='/concept'>
          <h3>Qu'est ce qu'un greeter ?</h3>
        </NavLink>

        {/*
       <NavLink to='/our-values'>
          <h3>Nos valeurs</h3>
        </NavLink>
      */}

        <NavLink to='/meetgreeter'>
          <h3>Rencontrer un greeter</h3>
        </NavLink>

        <NavLink to='/booking'>
          <h3>Réserver une balade</h3>
        </NavLink>

        <NavLink to='/contact'>
          <h3>Nous contacter</h3>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
