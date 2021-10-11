import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Admin from './admin/screens/Admin/Admin'
import AdminDetailsCity from './admin/screens/AdminDetailsCity/AdminDetailsCity'
import AdminDetailsGreeter from './admin/screens/AdminDetailsGreeter/AdminDetailsGreeter'
import AdminConnection from './admin/screens/AdminConnection/AdminConnection'
import CitiesList from './admin/screens/CitiesList/CitiesList'
import Contact from './screens/Contact/Contact'
import Greeter from './screens/Greeter/Greeter'
import GreetersList from './admin/screens/GreetersList/GreetersList'
import Home from './screens/Home/Home'
import MeetGreeter from './screens/MeetGreeter/MeetGreeter'

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
          <Route path='/admin/connection' exact>
            <AdminConnection />
          </Route>
          <Route path='/admin/list-greeters' exact>
            <GreetersList />
          </Route>
          <Route path='/admin/list-cities' exact>
            <CitiesList />
          </Route>
          <Route path='/admin/details-greeter/:greeterId' exact>
            <AdminDetailsGreeter />
          </Route>
          <Route path='/admin/details-city/:cityId' exact>
            <AdminDetailsCity />
          </Route>
          <Route path='/admin' exact>
            <Admin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
