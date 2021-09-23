import React from 'react'
import MeetGreeterBar from '../../components/MeetGreeterBar/MeetGreeterBar'
import Greeters from '../../components/Greeters/Greeters'

import './MeetGreeter.css'

const MeetGreeter = () => {
  return (
    <div>
      <h1 className='title-meet'>RENCONTRER UN GREETER</h1>
      <h3 className='little-title-meet'>Faites votre choix</h3>
      <MeetGreeterBar />
      <Greeters />
    </div>
  )
}

export default MeetGreeter
