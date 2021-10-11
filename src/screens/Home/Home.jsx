import Banner from '../../components/Banner/Banner'
import Cities from '../../components/Cities/Cities'
import Footer from '../../components/Footer/Footer'
import Greeters from '../../components/Greeters/Greeters'
import Map from '../../components/Map/Map'
import Navbar from '../../components/Navbar/Navbar'

import './Home.css'

const Home = () => {
  // window.addEventListener('scroll', () => {
  //   console.log(window.scrollY)
  // })

  return (
    <div>
      <Navbar />
      <Banner />
      <Greeters />
      <Cities />
      <Map coordinates={null} />
      <Footer />
    </div>
  )
}

export default Home
