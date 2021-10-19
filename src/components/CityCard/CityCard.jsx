import './CityCard.css'

const CityCard = props => {
  return (
    <div>
      {console.log('LAAAAAA')}
      <img className='city-img' src={props.photos_img} alt={props.city_name} />
      <h3 className='city-name'>{props.city_name}</h3>
    </div>
  )
}

export default CityCard
