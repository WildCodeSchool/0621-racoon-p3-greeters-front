import { useContext } from 'react'
import { LangueContext } from '../../context/langueContext'

import './GreeterProfilCard.css'

const GreeterProfilCard = props => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  return (
    <div className='greeter-profil-bloc-card' aos-data='fade-right'>
      <img
        src={props.result[0].person_photo}
        alt={props.result[0].person_firstname}
        className='greeter-profil-bloc-card-img'
      />
      <h3 className='greeter-profil-bloc-info-catchphrase'>
        {englishMode
          ? props.result[0].person_catch_phrase_en
          : props.result[0].person_catch_phrase_fr}
      </h3>
      <a
        href='https://gestion.greeters.fr/visits/new'
        target='_blank'
        rel='noreferrer'
        className='greeter-profil-bloc-card-btn-a'
      >
        <button className='greeter-profil-bloc-card-btn'>
          {englishMode ? 'Book your journey' : 'Réservez votre balade'}
        </button>
      </a>
    </div>
  )
}

export default GreeterProfilCard
