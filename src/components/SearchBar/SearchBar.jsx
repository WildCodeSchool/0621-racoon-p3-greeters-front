import { useEffect, useState } from 'react'
import CityInfo from '../../assets/Data/CitySearch'

import './SearchBar.css'

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')
  const [searchData, setSearchData] = useState(CityInfo)

  useEffect(() => {
    if (searchText === '') return
    setSearchData(() =>
      CityInfo.filter(item =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    )
  }, [searchText])

  const handleChange = e => {
    e.preventDefault()
    setSearchText(e.target.value)
    if (!e.target.value.length > 0) {
      setSearchData(CityInfo)
    }
  }

  return (
    <div className='searchBar'>
      <form>
        <input
          type='text'
          value={searchText}
          onChange={handleChange}
          placeholder='recherche'
        />
      </form>
    </div>
  )
}

export default SearchBar
