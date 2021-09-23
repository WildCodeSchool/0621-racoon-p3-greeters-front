import { useState } from 'react'

import image2 from '../../assets/concept-gauche.jpeg'
import image3 from '../../assets/concept-droit.jpeg'

import './ConceptPhotos.css'

const ConceptPhotos = () => {
  const [showResults, setShowResults] = useState(false)
  // const handleResult = setShowResults(true)
  return (
    <div className='ConceptPhotos-Container'>
      {showResults ? <Results /> : null}
      <div className='ConceptPhotos-Image1'>
        <img src={image2} alt='Image bas gauche' />
        <button
          onClick={() => setShowResults(!showResults)}
          className='ConceptPhotos-btn-left'
        >
          Le concept Greeters
        </button>
      </div>

      {/* Créer une fonction au dessus du return et dans cette fonction la fonction va appeler mon setShowResult handleResult */}

      <div className='ConceptPhotos-Image2'>
        <img src={image3} alt='Image bas droit' />
        <button className='ConceptPhotos-btn-right'>Nos valeurs</button>
      </div>
    </div>
  )
}

export default ConceptPhotos
