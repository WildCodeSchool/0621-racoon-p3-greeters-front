import { useState, useEffect } from 'react/cjs/react.development'
import ReactPaginate from 'react-paginate'
import axios from 'axios'

import GreeterCard from '../GreeterCard/GreeterCard'

import './GreetersPagination.css'

const GreetersPagination = ({
  selectedOptionsCity,
  selectedOptionsThem,
  selectedOptionsLang
}) => {
  const [pageNumber, setPageNumber] = useState(0)

  const [greeters, setGreeters] = useState([])
  const [greetersThem, setGreetersThem] = useState([])
  const [greetersLang, setGreetersLang] = useState([])

  const [filteredGreeters, setFilteredGreeters] = useState([])

  // fetch all greeters, from all tables...

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/person')
      setGreeters(resData.data.result)
      setGreetersThem(resData.data.result2)
      setGreetersLang(resData.data.result3)
      // console.log(resData.data)
    }
    getData()
  }, [])

  // filter on all greeters with filters props from MeetGreeterBar

  useEffect(() => {
    setFilteredGreeters(greeters.filter(g => g))
  }, [greeters, selectedOptionsCity, selectedOptionsThem, selectedOptionsLang])

  //number of greeters per page

  const greetersPerPage = 9
  const pagesVisited = pageNumber * greetersPerPage

  const displayGreeters = filteredGreeters
    .slice(pagesVisited, pagesVisited + greetersPerPage)
    .map((g, index) => <GreeterCard key={index} {...g} />)

  const pageCount = Math.ceil(filteredGreeters.length / greetersPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  console.log('log greeters', greeters)
  console.log(
    'log greetersThem',
    greetersThem.map(g => g.person_person_id + g.thematic_name_fr)
  )
  console.log(
    'log greetersLang',
    greetersLang.map(g => g.person_person_id + g.language_name_fr)
  )

  return (
    <>
      <h2 className='greeters-pagination-title'>Les Greeters</h2>
      <div className='greeters-pagination-container'>{displayGreeters}</div>
      <ReactPaginate
        previousLabel={'<- Page Précédente'}
        nextLabel={'Page Suivante ->'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </>
  )
}

export default GreetersPagination
