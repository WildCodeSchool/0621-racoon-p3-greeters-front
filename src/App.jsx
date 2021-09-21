import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'
import Greeter from './screens/Greeter/Greeter'
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
        <Route path='/greeter' exact>
          <Greeter />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
