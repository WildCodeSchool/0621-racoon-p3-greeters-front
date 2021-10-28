import { useContext } from 'react'

import { LangueContext } from '../../context/langueContext'

import './ConceptBanner.css'

const ConceptBanner = props => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  return (
    <div className='ConceptBanner-Container' data-aos='fade-right'>
      <>
        <h2 className='ConceptBanner-title'>
          {englishMode
            ? props.data.description_title1_en
            : props.data.description_title1_fr}
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
