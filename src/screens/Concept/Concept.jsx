import Aos from 'aos'
import 'aos/dist/aos.css'
import ConceptBanner from '../../components/ConceptBanner/ConceptBanner'
import ConceptDescription from '../../components/ConceptDescription/ConceptDescription'
import ConceptPhoto from '../../components/ConceptPhotos/ConceptPhotos'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect } from 'react'

import './Concept.css'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
import axios from 'axios'

const Concept = () => {
  const [descriptionData, setDescriptionData] = useState('')
  const [conceptData, setConceptData] = useState('')
  const [valueData, setValueData] = useState('')

  const getDescriptionData = async () => {
    const resData1 = await axios.get(
      `${process.env.REACT_APP_API_ROUTE}/description`
    )
    setDescriptionData(resData1.data[0])
    console.log(resData1)
  }

  const getConceptData = async () => {
    const resData2 = await axios.get(
      `${process.env.REACT_APP_API_ROUTE}/concept`
    )
    setConceptData(resData2.data[0])
    console.log(resData2)
  }

  const getValueData = async () => {
    const resData3 = await axios.get(`${process.env.REACT_APP_API_ROUTE}/value`)
    setValueData(resData3.data[0])
    console.log(resData3)
  }

  useEffect(() => {
    Aos.init({ duration: 1000 })
    getDescriptionData()
    getConceptData()
    getValueData()
  }, [])

  return (
    <div className='concept'>
      <Navbar />
      {console.log(descriptionData)}
      <>
        <ConceptBanner data={descriptionData} />
        <ConceptDescription data={descriptionData} />
        <ConceptPhoto dataC={conceptData} dataV={valueData} />
      </>

      <Footer />
    </div>
  )
}

export default Concept
