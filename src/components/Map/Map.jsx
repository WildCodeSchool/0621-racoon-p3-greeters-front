import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// Import icons
import pointer2 from '../../assets/map/pointer2.png'

import './Map.css'

const MapComponent = ({ coordinates }) => {
  /* Structure coordinates reçues: 
  coordinates {
    position: [lat, long],
    name: 'Tours'
  }
  */
  console.log(coordinates)
  // Static data for home map
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

  const redIcon = L.icon({
    iconUrl: pointer2, // image red
    iconSize: [50, 40], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [40, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86]
  })

  return (
    <div className='MapComponent' data-aos='fade-down'>
      {/* Using the map module */}
      <MapContainer
        className='map'
        center={city[0].cordonates} //coordinates ? coordinates :
        zoom={8}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {
          /*coordinates ? (
          <Marker
            position={[coordinates.position[0], coordinates.position[1]]}
            icon={redIcon}
          >
            <Popup>{coordinates.name}</Popup>
          </Marker>
        ) : (*/
          city.map((element, index) => (
            <Marker
              key={index}
              position={[element.icon.lat, element.icon.lng]}
              icon={redIcon}
            >
              <Popup>{element.name}</Popup>
            </Marker>
          ))
          // )}
        }
      </MapContainer>
    </div>
  )
}

export default MapComponent
