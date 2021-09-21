import React, { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'

import './MeetGreeterBar.css'

const MeetGreeterBar = () => {
  const [themeDropdown, setThemeDropdown] = useState(false)
  const [cityDropdown, setCityDropdown] = useState(false)
  const [languageDropdown, setLanguageDropdown] = useState(false)

  return (
    <>
      <nav className='navbar'>
        <ul className='nav-items'>
          <li
            className='nav-item'
            onClick={() => setThemeDropdown(!themeDropdown)}
          >
            <a href='#'>Thématiques</a>
            {themeDropdown && <Dropdown type='theme' />}
          </li>
          <li
            className='nav-item'
            onClick={() => setCityDropdown(!cityDropdown)}
          >
            <a href='#'>Villes</a>
            {cityDropdown && <Dropdown type='city' />}
          </li>
          <li
            className='nav-item'
            onClick={() => setLanguageDropdown(!languageDropdown)}
          >
            <a href='#'>Langues</a>
            {languageDropdown && <Dropdown type='language' />}
          </li>
        </ul>
        <button className='meet-greeter-btn'>Voir les (?) résultats</button>
      </nav>
    </>
  )
}

export default MeetGreeterBar
