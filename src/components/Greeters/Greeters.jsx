import { useEffect, useState } from 'react'
import axios from 'axios'

import GreeterCard from '../GreeterCard/GreeterCard'

import './Greeters.css'

const Greeters = () => {
  const [greeters, setGreeters] = useState([])

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/person/limit')
      setGreeters(resData.data.result)
    }
    getData()
  }, [])

  console.log(greeters)

  return (
    <>
      <h2 className='greeters-title'>Les Greeters</h2>

      <div className='greeters-container'>
        {greeters
          ? greeters.map((g, index) => <GreeterCard key={index} {...g} />)
          : null}
      </div>
      <button className='greeters-btn'>Tout Voir</button>
    </>
  )
}

export default Greeters
