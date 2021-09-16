import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import CitySearch from './assets/Data/CitySearch'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/' exact>
          <Navbar />
          <div className='city'>
            {CitySearch.map(item => (
              <h1 key={item.id}>{item.name}</h1>
            ))}
          </div>
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
