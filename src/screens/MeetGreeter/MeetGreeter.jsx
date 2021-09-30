import GreetersPagination from '../../components/GreetersPagination/GreetersPagination'
import MeetGreeterBar from '../../components/MeetGreeterBar/MeetGreeterBar'
import Navbar from '../../components/Navbar/Navbar'

import './MeetGreeter.css'

const MeetGreeter = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className='title-meet'>RENCONTRER UN GREETER</h1>
        <h3 className='little-title-meet'>Faites votre choix</h3>
        <MeetGreeterBar />
        <GreetersPagination />
      </div>
    </>
  )
}

export default MeetGreeter
