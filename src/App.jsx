import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div>
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
