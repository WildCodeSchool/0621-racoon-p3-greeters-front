import { NavLink } from 'react-router-dom'
import './CityCard.css'

const CityCard = props => {
  return (
    <div>
      <NavLink to={`/infoCity/${props.city_city_id}`}>
        <img
          className='city-img'
          src={props.photos_img}
          alt={props.city_name}
        />
        <h3 className='city-name'>{props.city_name}</h3>
      </NavLink>
    </div>
  )
}

export default CityCard
