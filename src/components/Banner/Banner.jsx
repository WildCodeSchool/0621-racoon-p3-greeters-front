import { City } from "../../data";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './Banner.css'
import BannerCard from "../BannerCard/BannerCard";

const Banner = () => {
  return ( 
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3500">
      <BannerCard />
      </AliceCarousel>
    </div>
   );
}
 
export default Banner;