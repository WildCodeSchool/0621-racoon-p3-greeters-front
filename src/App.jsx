import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'
import Concept from './screens/Concept/Concept'
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
        <Route path="/greeters">
            <Concept />
          </Route>
      </BrowserRouter>

    </div>
  )
}

export default App
