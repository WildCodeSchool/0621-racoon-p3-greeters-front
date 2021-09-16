import './BannerCard.css'

const BannerCard = props => {
  return (
    <div className='banner-card'>
      <img
        src={props.city_banner}
        alt={props.city_name}
        className='banner-img'
      />
      <h2>Découvrir {props.city_name}</h2>
    </div>
  )
}

export default BannerCard
