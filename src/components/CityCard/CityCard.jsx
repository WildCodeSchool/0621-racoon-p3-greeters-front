import './CityCard.css'

const CityCard = props => {
  return (
    <div>
      <img className='city-img' src={props.city_photo} alt={props.city_name} />
      <h3>{props.city_name}</h3>
    </div>
  )
}

export default CityCard
