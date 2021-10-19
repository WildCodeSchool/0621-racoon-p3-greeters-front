import { useEffect } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Aos from 'aos'
import 'aos/dist/aos.css'

const AdminError = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <>
      <Navbar />
      <h1>Vous n'avez pas acces à cette page t(-_-)</h1>
    </>
  )
}

export default AdminError
