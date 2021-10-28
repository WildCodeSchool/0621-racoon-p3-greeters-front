import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

import { LangueContext } from '../../context/langueContext'
import GreeterCard from '../GreeterCard/GreeterCard'

import './GreetersPagination.css'

const GreetersPagination = () => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  const [pageNumber, setPageNumber] = useState(0)

  const [greeters, setGreeters] = useState([])

  // fetch all greeters
  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get(
        `${process.env.REACT_APP_API_ROUTE}/person`
      )
      setGreeters(resData.data.result)
    }
    getData()
  }, [])

  //number of greeters per page

  const greetersPerPage = 9
  const pagesVisited = pageNumber * greetersPerPage

  // constant to display the result of filtered greeters

  const displayGreeters = greeters
    .slice(pagesVisited, pagesVisited + greetersPerPage)
    .map((g, index) => <GreeterCard key={index} {...g} />)

  // constant to display the number of pages

  const pageCount = Math.ceil(greeters.length / greetersPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <>
      <h2 className='greeters-pagination-title'>
        {englishMode ? 'Greeters' : 'Les Greeters'}
      </h2>
      <div className='greeters-pagination-container'>{displayGreeters}</div>
      <ReactPaginate
        previousLabel={<span className='arrowleft'>&#8678;</span>}
        nextLabel={<span className='arrowright'>&#8680;</span>}
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
