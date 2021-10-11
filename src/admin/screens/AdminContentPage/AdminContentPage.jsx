import axios from 'axios'
import { useEffect, useState } from 'react/cjs/react.development'
import React from 'react'
import ReactDOM from 'react-dom'
import { Link, useLocation, BrowserRouter as Router } from 'react-router-dom'

import './AdminContentPage.css'

const AdminContentPage = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery()

  const pageReq = query.get('page')

  const [pageData, setPageData] = useState('')

  useEffect(() => {
    const getData = async () => {
      const resultData = await axios.get(`http://localhost:3000/${pageReq}`)
      setPageData(resultData.data)
      console.log(resultData.data)
    }
    getData()
  }, [])

  console.log(query.get('page'))

  return (
    <div className='AdminContentPage'>
      {pageData && (
        <>
          <div className='page-table'>
            <table className='table'>
              <tr>
                <th>Titre FR: </th>
                <td>{pageData[0].description_title1_fr}</td>
              </tr>
              <tr>
                <th>Sous-titre FR: </th>
                <td>{pageData[0].description_title2_fr}</td>
              </tr>
              <tr>
                <th>Paragraphe FR: </th>
                <td>
                  <div>{pageData[0].description_content_fr}</div>
                </td>
              </tr>
            </table>
            <table className='table'>
              <tr>
                <th>Titre EN: </th>
                <td>{pageData[0].description_title1_en}</td>
              </tr>
              <tr>
                <th>Sous-titre EN: </th>
                <td>{pageData[0].description_title2_en}</td>
              </tr>
              <tr>
                <th>Pragraphe EN: </th>
                <td>{pageData[0].description_content_en}</td>
              </tr>
            </table>
          </div>
          <div>
            <div>Photo : </div>
            <div>{pageData[0].description_photo}</div>
          </div>
        </>
      )}
    </div>
  )
}

export default AdminContentPage
