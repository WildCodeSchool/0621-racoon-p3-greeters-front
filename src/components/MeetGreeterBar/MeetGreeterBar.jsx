import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { themeDropdown, cityDropdown, languageDropdown } from '../DropItems'

import './MeetGreeterBar.css'

const animatedComponents = makeAnimated()

const customStyles = {
  option: provided => ({
    ...provided,
    borderBottom: '1px dotted red',

    padding: 10
  }),
  valueContainer: provided => ({
    ...provided,
    justifyContent: 'center'
  }),
  placeholder: provided => ({
    ...provided,
    color: 'black'
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none'
  }),

  multiValue: provided => ({
    ...provided,
    backgroundColor: 'none'
  }),
  control: (_, { selectProps: { width } }) => ({
    // none of react-select's styles are passed to <Control />
    display: 'flex',
    height: '3rem',
    width: width
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  }
}

const MeetGreeterBar = () => {
  const [theme, setTheme] = useState([])
  const [city, setCity] = useState([])
  const [langue, setLangue] = useState([])

  return (
    <>
      <nav className='meetbar'>
        <div className='meet-items'>
          <Select
            styles={customStyles}
            components={animatedComponents}
            onChange={setTheme}
            options={themeDropdown}
            className='meet-select'
            placeholder='Thématiques'
            isMulti
            autoFocus
            isSearchable
            noOptionsMessage={() => 'tous les thèmes sont déja sélectionnés'}
          />
          <Select
            styles={customStyles}
            components={animatedComponents}
            onChange={setCity}
            options={cityDropdown}
            className='meet-select'
            placeholder='Villes'
            isMulti
            autoFocus
            isSearchable
            noOptionsMessage={() => 'toutes les villes sont déja sélectionnées'}
          />
          <Select
            styles={customStyles}
            components={animatedComponents}
            onChange={setLangue}
            options={languageDropdown}
            className='meet-select'
            placeholder='Langues'
            isMulti
            autoFocus
            isSearchable
            noOptionsMessage={() =>
              'toutes les langues sont déja sélectionnées'
            }
          />
        </div>
      </nav>
      <button className='meet-greeter-btn'>Voir les (?) résultats</button>
    </>
  )
}

export default MeetGreeterBar
