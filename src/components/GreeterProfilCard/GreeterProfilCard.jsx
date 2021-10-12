import React from 'react'

import './GreeterProfilCard.css'

const GreeterProfilCard = props => {
  return (
    <div className='greeter-profil-bloc-card'>
      <img
        src={props.result[0].person_photo}
        alt={props.result[0].person_firstname}
        className='greeter-profil-bloc-card-img'
      />
      <a
        href='https://gestion.greeters.fr/visits/new'
        target='_blank'
        rel='noreferrer'
      >
        <button className='greeter-profil-bloc-card-btn'>
          Réservez votre balade
        </button>
      </a>
    </div>
  )
}

export default GreeterProfilCard
