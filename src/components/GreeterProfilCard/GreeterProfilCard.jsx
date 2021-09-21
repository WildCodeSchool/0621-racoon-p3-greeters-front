import React from 'react'

import './GreeterProfilCard.css'

const GreeterProfilCard = props => {
  return (
    <div className='greeter-profil-bloc-card'>
      <img
        src={props.greeter_photo}
        alt={props.greeter_name}
        className='greeter-profil-bloc-card-img'
      />
      <button className='greeter-profil-bloc-card-btn'>
        Réservez votre greeter
      </button>
    </div>
  )
}

export default GreeterProfilCard
