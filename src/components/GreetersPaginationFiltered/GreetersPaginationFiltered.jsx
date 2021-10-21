import { useState, useEffect } from 'react/cjs/react.development'
import ReactPaginate from 'react-paginate'
import axios from 'axios'

import GreeterCard from '../GreeterCard/GreeterCard'

import '../GreetersPagination/GreetersPagination.css'

const GreetersPaginationFiltered = ({
  selectedOptionsCity,
  selectedOptionsThem,
  selectedOptionsLang
}) => {
  const [pageNumber, setPageNumber] = useState(0)

  const [greeters, setGreeters] = useState([])

  const [filteredGreeters, setFilteredGreeters] = useState([])

  // fetch all greeters on the route created to display each greeter with its theme, city and language

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get(
        `${process.env.REACT_APP_API_ROUTE}/person/filter`
      )
      setGreeters(resData.data)
    }
    getData()
  }, [])

  // filter on all greeters with all props from MeetGreeterBar

  useEffect(() => {
    // condition so that if no filter is activated all greeters are displayed

    if (
      selectedOptionsCity &&
      selectedOptionsThem &&
      selectedOptionsLang === []
    )
      return

    // declaration of variables for each filter

    const greetersFilteredByThem = greeters.filter(item =>
      item.person_thematic_fr.includes(selectedOptionsThem.map(t => t.value))
    )

    const greetersFilteredByCity = greeters.filter(item =>
      item.person_city_name.includes(selectedOptionsCity.map(c => c.value))
    )

    const greetersFilteredByLang = greeters.filter(item =>
      item.person_language_fr.includes(selectedOptionsLang.map(l => l.value))
    )

    // declaration of the variable (a array empty) which retrieves the result of the matches between the 3 filters above

    let filtre = []

    // iterations in the 3 arrays of greeters filtered to find the matches

    for (let i of greetersFilteredByCity) {
      if (
        greetersFilteredByThem.includes(i) &&
        greetersFilteredByLang.includes(i)
      ) {
        filtre.push(i)
      }
    }

    // pass as argument of the state which displays the filtered greeters the result

    setFilteredGreeters(filtre)
  }, [greeters, selectedOptionsCity, selectedOptionsThem, selectedOptionsLang])

  //number of greeters per page

  const greetersPerPage = 9
  const pagesVisited = pageNumber * greetersPerPage

  // constant to display the result of filtered greeters

  const displayGreeters = filteredGreeters
    .slice(pagesVisited, pagesVisited + greetersPerPage)
    .map((g, index) => <GreeterCard key={index} {...g} />)

  // constant to display the number of pages

  const pageCount = Math.ceil(filteredGreeters.length / greetersPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <>
      <h2 className='greeters-pagination-title'>Les Greeters</h2>
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

export default GreetersPaginationFiltered
