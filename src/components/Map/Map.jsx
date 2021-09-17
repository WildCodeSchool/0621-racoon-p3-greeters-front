import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// Import icons
import leafGreen from '../../assets/map/leaf-green.png'
import leafRed from '../../assets/map/leaf-red.png'
import leafOrange from '../../assets/map/leaf-orange.png'
import leafShadow from '../../assets/map/leaf-shadow.png'

import './Map.css'

const MapComponent = () => {
  // Fake data for tests
  const city = [
    {
      name: 'Tours',
      cordonates: [47.39, 0.68],
      icon: {
        lat: 47.39,
        lng: 0.68
      }
    },
    {
      name: 'Chinon',
      cordonates: [47.1, 0.14],
      icon: {
        lat: 47.1,
        lng: 0.14
      }
    },
    {
      name: 'Jouè-lés-Tours',
      cordonates: [47.35, 0.66],
      icon: {
        lat: 47.35,
        lng: 0.66
      }
    }
  ]

  // Init of the icons

  const greenIcon = L.icon({
    iconUrl: leafGreen, // image green
    shadowUrl: leafShadow, // shadow image
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76]
  })

  const redIcon = L.icon({
    iconUrl: leafRed, // image red
    shadowUrl: leafShadow, // shadow image
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -86]
  })

  const orangeIcon = L.icon({
    iconUrl: leafOrange, // image orange
    shadowUrl: leafShadow, // shadow image
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -86]
  })

  return (
    <div className='MapComponent'>
      {/* Using the map module */}
      <MapContainer className='map' center={city[0].cordonates} zoom={8}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {city.map((element, index) => (
          <Marker
            key={index}
            position={[element.icon.lat, element.icon.lng]}
            icon={redIcon}
          >
            <Popup>{element.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default MapComponent
