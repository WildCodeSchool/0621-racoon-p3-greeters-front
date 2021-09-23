import ConceptBanner from '../../components/ConceptBanner/ConceptBanner'
import ConceptDescription from '../../components/ConceptDescription/ConceptDescription'
import ConceptPhoto from '../../components/ConceptPhotos/ConceptPhotos'

import './Concept.css'

const Concept = () => {
  return (
    <div className='concept'>
      <ConceptBanner />
      <ConceptDescription />
      <ConceptPhoto />
    </div>
  )
}

export default Concept
