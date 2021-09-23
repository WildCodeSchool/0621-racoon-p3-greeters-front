import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'
import Greeter from './screens/Greeter/Greeter'

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
          <Route path='/greeters/1' exact>
            <Greeter />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
