import Footer from '../../components/Footer/Footer'
import MeetGreeterBar from '../../components/MeetGreeterBar/MeetGreeterBar'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import './MeetGreeter.css'

const MeetGreeter = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div>
      <Navbar />
      <h1 className='title-meet'>RENCONTRER UN GREETER</h1>
      <h3 className='little-title-meet'>Faites votre choix</h3>
      <MeetGreeterBar />
      <Footer />
    </div>
  )
}

export default MeetGreeter
