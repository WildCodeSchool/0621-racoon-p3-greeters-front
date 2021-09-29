import { useState } from 'react/cjs/react.development'
import { GreetersData } from '../../data'
import ReactPaginate from 'react-paginate'

import GreeterCard from '../GreeterCard/GreeterCard'

import './GreetersPagination.css'

const Greeters = () => {
  const [pageNumber, setPageNumber] = useState(0)

  //number of greeters per page
  const greetersPerPage = 4
  const pagesVisited = pageNumber * greetersPerPage

  const displayGreeters = GreetersData.slice(
    pagesVisited,
    pagesVisited + greetersPerPage
  ).map((g, index) => <GreeterCard key={index} {...g} />)

  const pageCount = Math.ceil(GreetersData.length / greetersPerPage)
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

export default Greeters
