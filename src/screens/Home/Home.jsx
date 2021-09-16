import Banner from '../../components/Banner/Banner'
import Cities from '../../components/Cities/Cities'
import Greeters from '../../components/Greeters/Greeters'
import './Home.css'

const Home = () => {
  return (
    <div>
      <h1>NavBar</h1>
      <Banner />
      <Greeters />
      <Cities />
    </div>
  )
}

export default Home
