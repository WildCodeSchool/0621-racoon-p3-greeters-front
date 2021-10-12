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

  const [filters, setFilters] = useState({})

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/thematic')
      setTheme(resData.data)
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/languages')
      setLangue(resData.data)
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/city')
      setCity(resData.data)
    }
    getData()
  }, [])

  // const handleFilters = e => {
  //   const value = e[0]
  //   setFilters({
  //     ...filters,
  //     [e[0].label]: value
  //   })
  // }

  // console.log(filters)
  // console.log(theme)

  return (
    <>
      <nav className='meetbar'>
        <div className='meet-items'>
          <Select
            styles={customStyles}
            components={animatedComponents}
            // onChange={handleFilters}
            options={theme.map(({ thematic_name_fr }) => ({
              label: thematic_name_fr
            }))}
            className='meet-select'
            placeholder='Thématiques'
            isMulti
            // autoFocus
            isSearchable
            // noOptionsMessage={() => 'tous les thèmes sont déja sélectionnés'}
          />
          <Select
            styles={customStyles}
            components={animatedComponents}
            // onChange={handleFilters}
            options={city.map(({ city_name }) => ({ label: city_name }))}
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
            // onChange={handleFilters}
            options={langue.map(({ language_name_fr }) => ({
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
      <button className='meet-greeter-btn'>Voir les (?) résultats</button>
      <GreetersPagination filters={filters} />
    </>
  )
}

export default MeetGreeterBar
