import { useEffect, useState, useContext } from 'react'
import Aos from 'aos'
import axios from 'axios'

import { LangueContext } from '../../context/langueContext'
import GreeterCard from '../GreeterCard/GreeterCard'

import 'aos/dist/aos.css'
import './Greeters.css'

const Greeters = () => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  const [greeters, setGreeters] = useState([])

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get(
        `${process.env.REACT_APP_API_ROUTE}/person?limit=true`
      )
      setGreeters(resData.data.result)
    }
    Aos.init({ duration: 1000 })
    getData()
  }, [])

  /* Animation */
  const [show, setShow] = useState(false)

  const handleShow = e => {
    setShow()
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  })

  return (
    <div className={'Greeters'} data-aos='fade-right'>
      <h2 className='greeters-title'>
        {englishMode ? 'Greeters' : 'Les Greeters'}
      </h2>

      <div className='greeters-container'>
        {greeters
          ? greeters.map((g, index) => <GreeterCard key={index} {...g} />)
          : null}
      </div>
      <a href='/meetgreeter' alt=''>
        <button className='greeters-btn'>
          {englishMode ? 'See All' : 'Tout Voir'}
        </button>
      </a>
    </div>
  )
}

export default Greeters
