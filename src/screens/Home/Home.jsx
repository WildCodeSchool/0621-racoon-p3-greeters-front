import Banner from '../../components/Banner/Banner'
import Cities from '../../components/Cities/Cities'
import Footer from '../../components/Footer/Footer'
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
      <Footer />
    </div>
  )
}

export default Home
