import { useState } from 'react'

import './SearchBar.css'

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')

  const handleChange = e => {
    e.preventDefault()
    setSearchText(e.target.value)
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
