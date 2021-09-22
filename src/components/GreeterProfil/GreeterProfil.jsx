import { GreetersProfilData } from '../../data'

import GreeterProfilCard from '../GreeterProfilCard/GreeterProfilCard'
import GreeterProfilInfo from '../GreeterProfilInfo/GreeterProfilInfo'

import './GreeterProfil.css'

const GreeterProfil = () => {
  return (
    <div className='greeter-profil'>
      <div className='greeter-profil-left'>
        {GreetersProfilData.map((g, index) => (
          <GreeterProfilCard key={index} {...g} />
        ))}
      </div>
      <div className='greeter-profil-right'>
        {GreetersProfilData.map((g, index) => (
          <GreeterProfilInfo key={index} {...g} />
        ))}
      </div>
    </div>
  )
}

export default GreeterProfil
