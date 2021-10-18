import ConceptBanner from '../../components/ConceptBanner/ConceptBanner'
import ConceptDescription from '../../components/ConceptDescription/ConceptDescription'
import ConceptPhoto from '../../components/ConceptPhotos/ConceptPhotos'
import Navbar from '../../components/Navbar/Navbar'

import './Concept.css'

const Concept = () => {
  return (
    <div className='concept'>
      <Navbar />
      <ConceptBanner />
      <ConceptDescription />
      <ConceptPhoto />
    </div>
  )
}

export default Concept
