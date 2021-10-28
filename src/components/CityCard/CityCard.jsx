import './CityCard.css'

const CityCard = props => {
  return (
    <div className='CityCard'>
      <a href={`/infoCity/${props.city_city_id}`}>
        <img
          className='city-img'
          src={props.photos_img}
          alt={props.city_name}
        />
        <h3 className='city-name'>{props.city_name}</h3>
      </a>
    </div>
  )
}

export default CityCard
