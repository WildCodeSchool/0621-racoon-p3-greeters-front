import { useState, useEffect } from 'react/cjs/react.development'
import ReactPaginate from 'react-paginate'
import axios from 'axios'

import GreeterCard from '../GreeterCard/GreeterCard'

import './GreetersPagination.css'

const GreetersPagination = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const [greeters, setGreeters] = useState([])

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

  const displayGreeters = greeters
    .slice(pagesVisited, pagesVisited + greetersPerPage)
    .map((g, index) => <GreeterCard key={index} {...g} />)

  const pageCount = Math.ceil(greeters.length / greetersPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

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
