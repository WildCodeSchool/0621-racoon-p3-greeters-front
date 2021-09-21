import React from 'react'
import MeetGreeterBar from '../../components/MeetGreeterBar/MeetGreeterBar'
import './MeetGreeter.css'

const MeetGreeter = () => {
  return (
    <div>
      <h1 className='title-meet'>RENCONTRER UN GREETER</h1>
      <h3 className='little-title-meet'>Faites votre choix</h3>
      <MeetGreeterBar />
    </div>
  )
}

export default MeetGreeter
