import Aos from 'aos'
import 'aos/dist/aos.css'
import ConceptBanner from '../../components/ConceptBanner/ConceptBanner'
import ConceptDescription from '../../components/ConceptDescription/ConceptDescription'
import ConceptPhoto from '../../components/ConceptPhotos/ConceptPhotos'
import NavBar from '../../components/Navbar/Navbar'
import { useEffect } from 'react'

import './Concept.css'

const Concept = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className='concept'>
      <NavBar />
      <ConceptBanner />
      <ConceptDescription />
      <ConceptPhoto />
    </div>
  )
}

export default Concept
