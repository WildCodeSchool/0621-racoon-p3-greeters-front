import { useContext } from 'react'
import { LangueContext } from '../../context/langueContext'
import './GreeterCard.css'

const GreeterCard = props => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode

  return (
    <div className='greeter-card'>
      <a href={`/greeters/${props.person_id}`}>
        <img
          src={props.person_photo}
          alt={props.person_firstname}
          className='greeter-img'
        />
        <h2 className='greeter-name'>{props.person_firstname}</h2>

        <div className='image__overlay image__overlay--primary'>
          <p className='greeter_city'>
            {englishMode ? 'Stroll in' : 'Balade à'} {props.city_name}
          </p>
        </div>
      </a>
    </div>
  )
}

export default GreeterCard
