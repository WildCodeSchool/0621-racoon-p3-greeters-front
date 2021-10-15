import { useState, useEffect } from 'react'
import axios from 'axios'

import image2 from '../../assets/concept-gauche.jpeg'
import image3 from '../../assets/concept-droit.jpeg'

import './ConceptPhotos.css'

const ConceptPhotos = () => {
  const [concept, setConcept] = useState([])
  const [value, setValue] = useState([])
  const [showResults, setShowResults] = useState(false)

  const [showConceptValue, setShowConceptValue] = useState('')

  useEffect(() => {
    const getDataConcept = async () => {
      const resData = await axios.get('http://localhost:3000/concept')
      console.log(resData)
      setConcept(resData.data[0])
    }
    getDataConcept()

    const getDataValue = async () => {
      const resData = await axios.get('http://localhost:3000/value')
      console.log(resData)
      setValue(resData.data[0])
    }
    getDataValue()
  }, [])
  // console.log(concept, value, description)

  function handleShowResultsClick(choice) {
    console.log(choice)
    setShowResults(true)
    setShowConceptValue(choice)
  }

  console.log(showConceptValue)

  return (
    <>
      <div className='ConceptPhotos-Container'>
        <div className='ConceptPhotos-Block-Image1'>
          <img
            className='ConceptPhotos-img'
            src={image2}
            alt='Image bas gauche'
          />
          <button
            onClick={() => handleShowResultsClick('concept')}
            className='ConceptPhotos-btn-left'
          >
            {concept && concept.concept_title1_fr}
          </button>
        </div>
        <div className='ConceptPhotos-Block-Image2'>
          <img
            className='ConceptPhotos-img'
            src={image3}
            alt='Image bas droit'
          />
          <button
            onClick={() => handleShowResultsClick('value')}
            className='ConceptPhotos-btn-right'
          >
            {value && value.value_title1_fr}
          </button>
        </div>
      </div>
      {showResults && (
        <div>
          <h2 className='Text-Concept'>
            {showConceptValue === 'value'
              ? value.value_title2_fr
              : concept.concept_title2_fr}
          </h2>
          <p className='Text-Valeurs'>
            {showConceptValue === 'value'
              ? value.value_content_fr
              : concept.concept_content_fr}
          </p>
          {console.log(concept)}
        </div>
      )}
    </>
  )
}

export default ConceptPhotos
