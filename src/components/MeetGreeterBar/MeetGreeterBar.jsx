import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import axios from 'axios'
import GreetersPagination from '../../components/GreetersPagination/GreetersPagination'

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
    color: 'rgba(0, 0, 0, 0.5)'
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
    height: 'auto',
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

  const [selectedOptionsCity, setSelectedOptionsCity] = useState([]) // abdou
  const [selectedOptionsThem, setSelectedOptionsThem] = useState([]) // abdou
  const [selectedOptionsLang, setSelectedOptionsLang] = useState([]) // abdou

  // fetch all thematics from data

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/thematic')
      setTheme(resData.data)
    }
    getData()
  }, [])

  // fetch all languages from data

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/languages')
      setLangue(resData.data)
    }
    getData()
  }, [])

  // fetch all cities from data

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/city')
      setCity(resData.data)
    }
    getData()
  }, [])

  const handleFiltersCity = e => {
    setSelectedOptionsCity(e)
  }
  const handleFiltersThem = e => {
    setSelectedOptionsThem(e)
  }
  const handleFiltersLang = e => {
    setSelectedOptionsLang(e)
  }

  return (
    <>
      {/* {console.log('log city', selectedOptionsCity)}
      {console.log('log thematic', selectedOptionsThem)}
      {console.log('log language', selectedOptionsLang)} */}
      <nav className='meetbar'>
        <div className='meet-items'>
          <Select
            styles={customStyles}
            components={animatedComponents}
            onChange={handleFiltersThem}
            options={theme.map(({ thematic_name_fr }) => ({
              value: thematic_name_fr,
              label: thematic_name_fr
            }))}
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
            onChange={handleFiltersCity}
            options={city.map(({ city_name }) => ({
              value: city_name,
              label: city_name
            }))}
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
            onChange={handleFiltersLang}
            options={langue.map(({ language_name_fr }) => ({
              value: language_name_fr,
              label: language_name_fr
            }))}
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
      {/* <button className='meet-greeter-btn'>Voir les (?) résultats</button> */}
      <GreetersPagination
        selectedOptionsCity={selectedOptionsCity}
        selectedOptionsThem={selectedOptionsThem}
        selectedOptionsLang={selectedOptionsLang}
      />
    </>
  )
}

export default MeetGreeterBar
