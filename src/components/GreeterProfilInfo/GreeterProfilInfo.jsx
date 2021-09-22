import React from 'react'

import './GreeterProfilInfo.css'

const GreeterProfilInfo = props => {
  return (
    <div className='greeter-profil-bloc-info'>
      <div className='greeter-profil-bloc-info-bloc1'>
        <h2 className='greeter-profil-bloc-info-name'>{props.greeter_name}</h2>
        <h3 className='greeter-profil-bloc-info-catchphrase'>
          {props.greeter_catch_phrase}
        </h3>
      </div>
      <div className='greeter-profil-bloc-info-bloc2'>
        <section className='greeter-profil-bloc-info-description'>
          <h4>Description</h4>
          <p>{props.greeter_description}</p>
        </section>
        <section className='greeter-profil-bloc-info-infos'>
          <article className='greeter-profil-bloc-info-city'>
            <h4>Ville</h4>
            <p>{props.greeter_city}</p>
          </article>
          <article className='greeter-profil-bloc-info-thematic'>
            <h4>Thématiques</h4>
            <p>{props.greeter_thematic}</p>
          </article>
          <article className='greeter-profil-bloc-info-language'>
            <h4>Langues parlées</h4>
            <p>{props.greeter_language}</p>
          </article>
        </section>
      </div>
    </div>
  )
}

export default GreeterProfilInfo
