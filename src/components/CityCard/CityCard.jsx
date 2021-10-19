import { NavLink, useParams } from 'react-router-dom'
import './CityCard.css'

const CityCard = props => {
  let { id } = useParams()
  return (
    <div className='container-citycard'>
      <NavLink to={`/infoCity/${id}`}>
        <img
          className='city-img'
          src={props.city_photo}
          alt={props.city_name}
        />
      </NavLink>
      <h3 className='city-name'>{props.city_name}</h3>
    </div>
  )
}

export default CityCard
