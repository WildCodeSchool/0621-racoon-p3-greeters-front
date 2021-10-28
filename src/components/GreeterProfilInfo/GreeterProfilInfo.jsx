import { useContext } from 'react'

import { LangueContext } from '../../context/langueContext'

import './GreeterProfilInfo.css'

const GreeterProfilInfo = props => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode
  return (
    <div className='greeter-profil-bloc-info' aos-data='fade-down'>
      <div className='greeter-profil-bloc-info-bloc1'>
        <h2 className='greeter-profil-bloc-info-name'>
          {props.result[0].person_firstname}
        </h2>
        <article className='greeter-profil-bloc-info-city'>
          <p>
            <strong>{englishMode ? 'City : ' : 'Ville : '}</strong>{' '}
            {props.result[0].city_name}
          </p>
        </article>
        <section className='greeter-profil-bloc-info-description'>
          <h4 className='greeter-profil-bloc-h4'>Description</h4>
          <p>
            {englishMode
              ? props.result[0].person_description_en
              : props.result[0].person_description_fr}
          </p>
        </section>
      </div>
      <div className='greeter-profil-bloc-info-bloc2'>
        <section className='greeter-profil-bloc-info-infos'>
          <article className='greeter-profil-bloc-info-thematic'>
            <h4 className='greeter-profil-bloc-h4'>
              {englishMode ? 'Thematics' : 'Thématiques'}
            </h4>
            {props.result2.map((resthem, index) => (
              <p key={index}>
                {englishMode
                  ? resthem.thematic_name_en
                  : resthem.thematic_name_fr}
              </p>
            ))}
          </article>
          <article className='greeter-profil-bloc-info-language'>
            <h4 className='greeter-profil-bloc-h4'>
              {englishMode ? 'Spoken languages' : 'Langues parlées'}
            </h4>
            {props.result3.map((reslang, index) => (
              <p key={index}>
                {englishMode
                  ? reslang.language_name_en
                  : reslang.language_name_fr}
              </p>
            ))}
          </article>
        </section>
      </div>
    </div>
  )
}

export default GreeterProfilInfo
