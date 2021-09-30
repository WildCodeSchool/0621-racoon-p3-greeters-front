import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Admin from './admin/screens/Admin'
import AdminConnection from './admin/screens/AdminConnection/AdminConnection'
import CitiesList from './admin/screens/CitiesList/CitiesList'
import Contact from './screens/Contact/Contact'
import GreetersList from './admin/screens/GreetersList/GreetersList'
import MeetGreeter from './screens/MeetGreeter/MeetGreeter'
import Home from './screens/Home/Home'
import Greeter from './screens/Greeter/Greeter'

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact>
          <Home />
        </Route>
        <Switch>
          <Route path='/meetgreeter' exact>
            <MeetGreeter />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
          <Route path='/greeters/1' exact>
            <Greeter />
          </Route>
          <Route path='/admin' exact>
            <Admin />
          </Route>
          <Route path='/admin/connection' exact>
            <AdminConnection />
          </Route>
          <Route path='/admin/list/greeters' exact>
            <GreetersList />
          </Route>
          <Route path='/admin/list/cities' exact>
            <CitiesList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
