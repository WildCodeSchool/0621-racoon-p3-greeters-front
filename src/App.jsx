import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'

import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Route path='/' exact>
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
