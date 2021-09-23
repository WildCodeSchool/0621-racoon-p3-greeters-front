import Banner from '../../components/Banner/Banner'
import Cities from '../../components/Cities/Cities'
import HomeGreeters from '../../components/HomeGreeters/HomeGreeters'
import Map from '../../components/Map/Map'

import './Home.css'

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeGreeters />
      <Cities />
      <Map />
    </div>
  )
}

export default Home
