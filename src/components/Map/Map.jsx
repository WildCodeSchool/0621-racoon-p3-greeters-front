import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import Aos from 'aos'
import axios from 'axios'
import L from 'leaflet'

import 'aos/dist/aos.css'
import './Map.css'

import pointer from '../../assets/map/pointer.png'

const MapComponent = ({ cordinates }) => {
  // Loading animation
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [cityDB, setCityDB] = useState(null)

  // Axios to fetch all the cities info
  const getCityData = async () => {
    const resCityData = await axios.get('http://localhost:3000/city')
    setCityDB(resCityData.data)
  }

  // Cordinates loading
  useEffect(() => {
    if (cordinates) {
      const uniqueCordinates = [
        {
          city_longitude: cordinates.position[1],
          city_latitude: cordinates.position[0],
          city_name: cordinates.name
        }
      ]
      setCityDB(uniqueCordinates)
    } else {
      getCityData()
    }
  }, [cordinates])

  // Map icon settings
  const mapIcon = L.icon({
    iconUrl: pointer,
    iconSize: [50, 40],
    shadowSize: [50, 64],
    iconAnchor: [10, 30],
    popupAnchor: [10, -35]
  })
  console.log(cityDB)
  return (
    <div className='MapComponent' data-aos='fade-down'>
      {/* Using the map module */}

      {cityDB && (
        <MapContainer
          className='map'
          center={[cityDB[0].city_longitude, cityDB[0].city_latitude]}
          zoom={cityDB.length == 1 ? 13 : 8}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {cityDB.map((element, index) => (
            <Marker
              key={index}
              position={[element.city_longitude, element.city_latitude]}
              icon={mapIcon}
            >
              <Popup>{element.city_name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  )
}

export default MapComponent
