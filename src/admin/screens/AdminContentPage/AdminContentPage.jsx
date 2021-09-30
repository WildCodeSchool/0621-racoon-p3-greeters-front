import axios from 'axios'
import { useEffect, useState } from 'react/cjs/react.development'

const AdminContentPage = () => {
  // const pageName = req.query.page

  const [pageData, setPageData] = useState('')

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/description')
      setPageData(resData.data)
    }
    getData()
  }, [])

  return (
    <div className='AdminContentPage'>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default AdminContentPage
