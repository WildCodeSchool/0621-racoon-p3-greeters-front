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
  const [filteredGreetersById, setFilteredGreetersById] = useState([])

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

  // filter on all greeters with all props from MeetGreeterBar

  useEffect(() => {
    if (selectedOptionsCity === []) return

    const greetersFilteredByCity = greeters.filter(item =>
      item.city_name.match(selectedOptionsCity.map(c => c.value))
    )




    

    const greetersFilteredByThemById = greeters.filter(item =>
      item.person_id.match(greetersFilteredByThem.map(c => c.person_person_id))
    )

    const greetersFilteredByThem = greetersThem.filter(item =>
      item.thematic_name_fr.match(selectedOptionsThem.map(t => t.value))
    )





    const greetersFilteredByLang = greetersLang.filter(item =>
      item.language_name_fr.match(selectedOptionsThem.map(t => t.value))
    )

    // console.log('greeters filtrés par city', greetersFilteredByCity)
    console.log('greeters filtrés par thematiques', greetersFilteredByThem)
    console.log(
      'greeters filtrés par thematiques par id',
      greetersFilteredByThemById
    )
    // console.log('greeters filtrés par langages', greetersFilteredByLang)

    // setFilteredGreeters(
    //   greetersFilteredByCity + greetersFilteredByThem + greetersFilteredByLang
    // )
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
  // console.log('filtre city', selectedOptionsCity)
  // console.log('greeters filtrés', { filteredGreeters })
  console.log('filtre thematic', selectedOptionsThem)
  // console.log('filtre langue', selectedOptionsLang)
  console.log('log greeters', greeters)
  console.log('log greetersThem', greetersThem)
  // console.log('log greetersLang', greetersLang)

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
