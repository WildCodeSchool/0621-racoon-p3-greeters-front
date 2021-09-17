import './GreeterCard.css'

const GreeterCard = props => {
  return (
    <div className='greeter-card'>
      <img
        src={props.greeter_photo}
        alt={props.greeter_name}
        className='greeter-img'
      />
      <h2 className='greeter-name'>{props.greeter_name}</h2>
    </div>
  )
}

export default GreeterCard
