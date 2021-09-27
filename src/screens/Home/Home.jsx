import Banner from '../../components/Banner/Banner'
import Cities from '../../components/Cities/Cities'
import Greeters from '../../components/Greeters/Greeters'
import Map from '../../components/Map/Map'
import './Home.css'
import Footer from '../../components/Footer/Footer'

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
