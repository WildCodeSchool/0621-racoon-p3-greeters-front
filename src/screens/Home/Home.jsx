import Banner from '../../components/Banner/Banner'
import Cities from '../../components/Cities/Cities'
import Greeters from '../../components/Greeters/Greeters'
import Map from '../../components/Map/Map'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Banner />
      <Greeters />
      <Cities />
      <Map />
    </div>
  )
}

export default Home
