import { useEffect, useState } from 'react'
import axios from 'axios'

import GreeterCard from '../GreeterCard/GreeterCard'

import './Greeters.css'
import { Link } from 'react-router-dom'

const Greeters = () => {
  const [greeters, setGreeters] = useState([])

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/person?limit=true')
      setGreeters(resData.data.result)
    }
    getData()
  }, [])

  console.log(greeters)

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
    <div
      className={show ? 'Greeters' : 'Greeters'}
      data-aos='fade-right'
      data-aos-anchor-placement='top-center'
    >
      <h2 className='greeters-title'>Les Greeters</h2>

      <div className='greeters-container'>
        {greeters
          ? greeters.map((g, index) => <GreeterCard key={index} {...g} />)
          : null}
      </div>
      <Link to='/meetgreeter'>
        <button className='greeters-btn'>Tout Voir</button>
      </Link>
    </div>
  )
}

export default Greeters
