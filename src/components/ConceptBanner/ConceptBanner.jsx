import image1 from '../../assets/concept-accueil.jpeg'

import './ConceptBanner.css'

const ConceptBanner = props => {
  return (
    <div className='ConceptBanner-Container' data-aos='fade-right'>
      <>
        <h2 className='ConceptBanner-title'>
          {props.data.description_title1_fr}
        </h2>
        <img
          className='ConceptBanner-image'
          src={props.data.description_photo}
          alt="Image d'accueil"
        />
      </>
    </div>
  )
}
export default ConceptBanner
