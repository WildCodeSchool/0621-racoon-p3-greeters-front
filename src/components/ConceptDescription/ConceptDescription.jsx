import { useState, useEffect } from 'react'
import axios from 'axios'

import './ConceptDescription.css'

const ConceptDescription = () => {
  const [description, setDescription] = useState([])
  useEffect(() => {
    const getDataDescription = async () => {
      const resData = await axios.get('http://localhost:3000/description')
      console.log(resData.data[0])
      setDescription(resData.data[0])
    }
    getDataDescription()
  }, [])
  return (
    <>
      {description && (
        <div className='ConceptDescription-Container'>
          <div>
            <h2 className='ConceptDescription-Rencontre'>
              {description.description_title2_fr}
            </h2>
          </div>

          <div className='ConceptDescription-Texte'>
            <p>{description.description_content_fr}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ConceptDescription
