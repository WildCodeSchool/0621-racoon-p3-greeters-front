import React from 'react'

const GreeterProfilCard = props => {
  return (
    <div className='greeter-profil-bloc-card'>
      <img
        src={props.greeter_photo}
        alt={props.greeter_name}
        className='greeter-profil-bloc-card-img'
      />
    </div>
  )
}

export default GreeterProfilCard
