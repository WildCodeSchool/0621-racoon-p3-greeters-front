import { City } from "../../data";

import './BannerCard.css'

const BannerCard = () => {
  return ( 
    <div className="banner-card">
      <img src={City[0].city_banner} alt={City[0].city_name} className="banner-img"/>
      <div className="banner-text">
        <h2>Découvrir {City[0].city_name}</h2>
      </div>
    </div>
   );
}
 
export default BannerCard;