import React from 'react'

import './GreeterProfilInfo.css'

const GreeterProfilInfo = props => {
  return (
    <div className='greeter-profil-bloc-info'>
      <div className='greeter-profil-bloc-info-bloc1'>
        <h2 className='greeter-profil-bloc-info-name'>
          {props.result[0].person_firstname}
        </h2>
        <h3 className='greeter-profil-bloc-info-catchphrase'>
          {props.result[0].person_catch_phrase_fr}
        </h3>
      </div>
      <div className='greeter-profil-bloc-info-bloc2'>
        <section className='greeter-profil-bloc-info-description'>
          <h4>Description</h4>
          <p>{props.result[0].person_description_fr}</p>
        </section>
        <section className='greeter-profil-bloc-info-infos'>
          <article className='greeter-profil-bloc-info-city'>
            <h4>Ville</h4>
            <p>{props.result[0].city_name}</p>
          </article>
          <article className='greeter-profil-bloc-info-thematic'>
            <h4>Thématiques</h4>
            {props.result2.map((resthem, index) => (
              <p key={index}>{resthem.thematic_name_fr}</p>
            ))}
          </article>
          <article className='greeter-profil-bloc-info-language'>
            <h4>Langues parlées</h4>
            {props.result3.map((reslang, index) => (
              <p key={index}>{reslang.language_name_fr}</p>
            ))}
          </article>
        </section>
      </div>
    </div>
  )
}

export default GreeterProfilInfo
