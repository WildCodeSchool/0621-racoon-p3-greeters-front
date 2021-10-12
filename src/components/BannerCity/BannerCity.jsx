import { useState, useEffect } from 'react'
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const BannerCity = () => {
  const handleDragStart = e => e.preventDefault()
  const [bannerCity, setBannerCity] = useState([])

  useEffect(() => {
    const getData = async () => {
      const resData = await axios.get('http://localhost:3000/city')
      setBannerCity(resData.data.result)
      console.log(resData.data)
    }
    getData()
  }, [])

  const item = []
  banneCity.map(r => {
    let photo = (
      <div>
        <img
          src={r.city_banner}
          onDragStart={handleDragStart}
          className='bannerCity'
        />
      </div>
    )
  })
  return
}

export default BannerCity
