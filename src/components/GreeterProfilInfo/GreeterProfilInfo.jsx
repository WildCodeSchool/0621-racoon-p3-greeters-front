import React from 'react'

const GreeterProfilInfo = props => {
  return (
    <div className='greeter-profil-bloc-info'>
      <div>
        <h2 className='greeter-profil-bloc-info-name'>{props.greeter_name}</h2>
        <h3 className='greeter-profil-bloc-info-catchphrase'></h3>
      </div>
      <div>
        <section className='greeter-profil-bloc-info-description'>
          <h4></h4>
          <p></p>
        </section>
        <section className='greeter-profil-bloc-info-infos'>
          <article className='greeter-profil-bloc-info-city'>
            <h4></h4>
            <p></p>
          </article>
          <article className='greeter-profil-bloc-info-thematic'>
            <h4></h4>
            <p></p>
          </article>
          <article className='greeter-profil-bloc-info-language'>
            <h4></h4>
            <p></p>
          </article>
        </section>
      </div>
    </div>
  )
}

export default GreeterProfilInfo
