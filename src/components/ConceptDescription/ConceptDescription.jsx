import './ConceptDescription.css'

const ConceptDescription = props => {
  return (
    <div className='ConceptDescription-Container' data-aos='fade-down'>
      <>
        <div>
          <h2 className='ConceptDescription-Rencontre'>
            {props.data.description_title2_fr}
          </h2>
        </div>

        <div className='ConceptDescription-Texte'>
          <p
            dangerouslySetInnerHTML={{
              __html: `${props.data.description_content_fr}`
            }}
          ></p>
        </div>
      </>
    </div>
  )
}

export default ConceptDescription
