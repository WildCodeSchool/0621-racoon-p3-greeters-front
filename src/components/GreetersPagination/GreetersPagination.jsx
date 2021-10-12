import { useState, useEffect } from 'react/cjs/react.development'
import ReactPaginate from 'react-paginate'
import axios from 'axios'

import GreeterCard from '../GreeterCard/GreeterCard'

import './GreetersPagination.css'

const GreetersPagination = ({ filters }) => {
  const [pageNumber, setPageNumber] = useState(0)
  const [greeters, setGreeters] = useState([])

  const [filteredGreeters, setFilteredGreeters] = useState([])

  // fetch all greeters

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/person')
      setGreeters(resData.data.result)
      // console.log(resData.data)
    }

    getData()
  }, [])

  // filter on all greeters with filters props from MeetGreeterBar

  // useEffect(() => {
  //   setFilteredGreeters(
  //     greeters.filter(item =>
  //       Object.entries(filters).every(
  //         ([key, value]) => item[key]
  //         // .includes(value)
  //       )
  //     )
  //   )
  // }, [greeters, filters])

  useEffect(() => {
    setFilteredGreeters(greeters.filter(g => g))
  }, [greeters, filters])

  //number of greeters per page

  const greetersPerPage = 9
  const pagesVisited = pageNumber * greetersPerPage

  const displayGreeters = greeters
    .slice(pagesVisited, pagesVisited + greetersPerPage)
    .map((g, index) => <GreeterCard key={index} {...g} />)

  const pageCount = Math.ceil(filteredGreeters.length / greetersPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  // console.log(filters)
  // console.log(filteredGreeters)
  // console.log(greeters)
  // console.log(greeters.filter(g => g.city_name === filters))

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
