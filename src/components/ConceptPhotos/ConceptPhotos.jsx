import { useState, useEffect, useContext } from 'react'

import { LangueContext } from '../../context/langueContext'

import './ConceptPhotos.css'

const ConceptPhotos = ({ dataC, dataV }) => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode

  const [okData, setOkData] = useState(false)

  useEffect(() => {
    if (dataC) {
      setOkData(true)
    }
  }, [])

  const [showResults, setShowResults] = useState(false)

  const [showConceptValue, setShowConceptValue] = useState('')

  function handleShowResultsClick(choice) {
    setShowResults(true)
    setShowConceptValue(choice)
  }

  return (
    <>
      <div className='ConceptPhotos-Container' data-aos='fade-right'>
        <div className='ConceptPhotos-Block-Image1'>
          <div className='ConceptPhotos-image'>
            <img
              className='ConceptPhotos-img'
              src={dataC.concept_photo}
              alt='Image bas gauche'
            />
          </div>
          <a href='#text-container'>
            <button
              onClick={() => handleShowResultsClick('concept')}
              className='ConceptPhotos-btn-left ConceptPhotos-btn'
            >
              {englishMode ? dataC.concept_title1_en : dataC.concept_title1_fr}
            </button>
          </a>
        </div>
        <div className='ConceptPhotos-Block-Image2'>
          <div className='ConceptPhotos-image'>
            <img
              className='ConceptPhotos-img'
              src={dataV.value_photo}
              alt='Image bas droit'
            />
          </div>
          <a href='#text-container'>
            <button
              onClick={() => handleShowResultsClick('value')}
              className='ConceptPhotos-btn-right ConceptPhotos-btn'
            >
              {englishMode ? dataV.value_title1_en : dataV.value_title1_fr}
            </button>
          </a>
        </div>
      </div>
      {showResults && (
        <div className='text-container-desktop' id='text-container'>
          <h2 className='Text-Concept'>
            {showConceptValue === 'value'
              ? englishMode
                ? dataV.value_title2_en
                : dataV.value_title2_fr
              : englishMode
              ? dataC.concept_title2_en
              : dataC.concept_title2_fr}
          </h2>
          {showConceptValue === 'value' ? (
            <p
              className='Text-Valeurs'
              dangerouslySetInnerHTML={{
                __html: `${
                  englishMode ? dataV.value_content_en : dataV.value_content_fr
                }`
              }}
            ></p>
          ) : (
            <p
              className='Text-Valeurs'
              dangerouslySetInnerHTML={{
                __html: `${
                  englishMode
                    ? dataC.concept_content_en
                    : dataC.concept_content_fr
                }`
              }}
            ></p>
          )}
        </div>
      )}
    </>
  )
}

export default ConceptPhotos
