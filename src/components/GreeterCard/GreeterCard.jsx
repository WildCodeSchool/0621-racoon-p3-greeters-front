import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { LangueContext } from '../../context'
import './GreeterCard.css'

const GreeterCard = props => {
  const history = useHistory()
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode

  return (
    <div
      className='greeter-card'
      onClick={() => {
        history.replace(`/greeters/${props.person_id}`)
        window.location.reload()
      }}
    >
      <img
        src={props.person_photo}
        alt={props.person_firstname}
        className='greeter-img'
      />
      <h2 className='greeter-name'>{props.person_firstname}</h2>

      <div className='image__overlay image__overlay--primary'>
        <p className='greeter_city'>{englishMode ? 'Stroll in' : 'Balade à'} {props.city_name}</p>
        {/* <h2 className='greeter-name'>{props.person_firstname}</h2> */}
      </div>
    </div>
  )
}

export default GreeterCard
