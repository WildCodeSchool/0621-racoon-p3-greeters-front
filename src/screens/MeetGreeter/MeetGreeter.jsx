import { LangueContext } from '../../context/langueContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import MeetGreeterBar from '../../components/MeetGreeterBar/MeetGreeterBar'
import Navbar from '../../components/Navbar/Navbar'

import Aos from 'aos'
import 'aos/dist/aos.css'

import './MeetGreeter.css'

const MeetGreeter = () => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div>
      <Navbar />
      <h1 className='title-meet'>
        {englishMode ? 'MEET A GREETER' : 'RENCONTRER UN GREETER'}
      </h1>
      <h3 className='little-title-meet'>
        {englishMode ? 'Make your choice' : 'Faites votre choix'}
      </h3>
      <MeetGreeterBar />
      <Footer />
    </div>
  )
}

export default MeetGreeter
