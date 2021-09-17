// import './App.css'
// import L from 'leaflet'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import leafGreen from './assets/map/leaf-green.png'
// import leafRed from './assets/map/leaf-red.png'
// import leafOrange from './assets/map/leaf-orange.png'
// import leafShadow from './assets/map/leaf-shadow.png'

// const App = () => {
//   const city = [
//     {
//       name: 'Tours',
//       cordonates: [47.39, 0.68],
//       orangeIcon: {
//         lat: 47.39,
//         lng: 0.68
//       }
//     },
//     {
//       name: 'Chinon',
//       cordonates: [47.1, 0.14],
//       orangeIcon: {
//         lat: 47.1,
//         lng: 0.14
//       }
//     },
//     {
//       name: 'Jouè-lés-Tours',
//       cordonates: [47.35, 0.66],
//       orangeIcon: {
//         lat: 47.35,
//         lng: 0.66
//       }
//     }
//   ]

//   const greenIcon = L.icon({
//     iconUrl: leafGreen,
//     shadowUrl: leafShadow,
//     iconSize: [38, 95], // size of the icon
//     shadowSize: [50, 64], // size of the shadow
//     iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62], // the same for the shadow
//     popupAnchor: [-3, -76]
//   })

//   const redIcon = L.icon({
//     iconUrl: leafRed,
//     shadowUrl: leafShadow,
//     iconSize: [38, 95], // size of the icon
//     shadowSize: [50, 64], // size of the shadow
//     iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62], // the same for the shadow
//     popupAnchor: [-3, -86]
//   })

//   const orangeIcon = L.icon({
//     iconUrl: leafOrange,
//     shadowUrl: leafShadow,
//     iconSize: [38, 95], // size of the icon
//     shadowSize: [50, 64], // size of the shadow
//     iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62], // the same for the shadow
//     popupAnchor: [-3, -86]
//   })

//   return (
//     <MapContainer className='map' center={city[0].cordonates} zoom={13}>
//       <TileLayer
//         attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//       />
//       {city.map((element, index) => (
//         <Marker
//           key={index}
//           position={[element.orangeIcon.lat, element.orangeIcon.lng]}
//           icon={orangeIcon}
//         >
//           <Popup>{element.name}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   )
// }

// export default App
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Map from './components/Map/Map'

import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Route path='/' exact>
          <Map />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
