import { LangueContext } from '../../context/langueContext'
import { useContext } from 'react'

import './ConceptDescription.css'

const ConceptDescription = props => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  return (
    <div className='ConceptDescription-Container' data-aos='fade-down'>
      <>
        <div>
          <h2 className='ConceptDescription-Rencontre'>
            {englishMode
              ? props.data.description_title2_en
              : props.data.description_title2_fr}
          </h2>
        </div>

        <div className='ConceptDescription-Texte'>
          <p
            dangerouslySetInnerHTML={{
              __html: `${
                englishMode
                  ? props.data.description_content_en
                  : props.data.description_content_fr
              }`
            }}
          ></p>
        </div>
      </>
    </div>
  )
}

export default ConceptDescription
