import image1 from '../../assets/concept-accueil.jpeg'

import './ConceptBanner.css'

const ConceptBanner = () => {
  return (
    <div className='ConceptBanner-Container'>
      <h2 className='ConceptBanner-title'>Qu'est ce qu'un Greeters ?</h2>
      <img className='ConceptBanner-image' src={image1} alt="Image d'accueil" />
    </div>
  )
}
export default ConceptBanner
