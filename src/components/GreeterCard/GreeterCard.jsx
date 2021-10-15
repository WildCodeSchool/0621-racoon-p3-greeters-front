import { useHistory } from 'react-router-dom'
import './GreeterCard.css'

const GreeterCard = props => {
  // const greeterRedirect = () => {
  // const { pathname } = useLocation()
  const history = useHistory()

  return (
    <div
      className='greeter-card'
      onClick={() => {
        history.replace(`/greeters/${props.person_id}`)
        window.location.reload()
      }}
    >
      {/* <NavLink to={`/greeters/${props.person_id}`}> */}
      <img
        src={props.person_photo}
        alt={props.person_firstname}
        className='greeter-img'
      />
      {/* </NavLink> */}
      <h2 className='greeter-name'>{props.person_firstname}</h2>
    </div>
  )
}

export default GreeterCard
