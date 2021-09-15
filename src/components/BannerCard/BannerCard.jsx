import { City } from "../../data";

import './BannerCard.css'

const BannerCard = (props) => {
  console.log(props)
  return ( 
    <div className="banner-card">
      <img src={props.city_banner} alt={props.name} className="banner-img"/>
      <h2>Découvrir {props.name}</h2>
    </div>
      )
};
 
export default BannerCard;