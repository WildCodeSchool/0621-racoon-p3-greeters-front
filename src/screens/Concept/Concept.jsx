import Aos from 'aos'
import 'aos/dist/aos.css'
import ConceptBanner from '../../components/ConceptBanner/ConceptBanner'
import ConceptDescription from '../../components/ConceptDescription/ConceptDescription'
import ConceptPhoto from '../../components/ConceptPhotos/ConceptPhotos'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect } from 'react'

import './Concept.css'
import Footer from '../../components/Footer/Footer'

const Concept = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className='concept'>
      <Navbar />
      <ConceptBanner />
      <ConceptDescription />
      <ConceptPhoto />
      <Footer />
    </div>
  )
}

export default Concept
