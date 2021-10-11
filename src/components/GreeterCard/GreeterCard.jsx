import { NavLink } from 'react-router-dom'
import './GreeterCard.css'

const GreeterCard = props => {
  return (
    <div className='greeter-card'>
      <NavLink to='/greeters/1'>
        <img
          src={props.person_photo}
          alt={props.person_firstname}
          className='greeter-img'
        />
      </NavLink>
      <h2 className='greeter-name'>{props.person_firstname}</h2>
    </div>
  )
}

export default GreeterCard
