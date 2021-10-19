import { LangueContext } from '../../context'
import { useContext } from 'react'
import image1 from '../../assets/concept-accueil.jpeg'

import './ConceptBanner.css'

const ConceptBanner = () => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  return (
    <div className='ConceptBanner-Container'>
      <h2 className='ConceptBanner-title'>
        {englishMode ? 'What is a Greeter?' : "Qu'est ce qu'un Greeters ?"}{' '}
      </h2>
      <img className='ConceptBanner-image' src={image1} alt="Image d'accueil" />
    </div>
  )
}
export default ConceptBanner
