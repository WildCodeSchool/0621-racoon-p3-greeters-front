import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Admin from './admin/screens/Admin/Admin'
import AdminDetailsCity from './admin/components/AdminDetailsCity/AdminDetailsCity'
import AdminDetailsGreeter from './admin/components/AdminDetailsGreeter/AdminDetailsGreeter'
import AdminConnection from './admin/screens/AdminConnection/AdminConnection'
import Contact from './screens/Contact/Contact'
import Greeter from './screens/Greeter/Greeter'
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
          <Route path='/admin' exact>
            <Admin />
          </Route>
          <Route path='/admin/connection' exact>
            <AdminConnection />
          </Route>
          <Route path='/admin/details/greeter' exact>
            <AdminDetailsGreeter />
          </Route>
          <Route path='/admin/details/city' exact>
            <AdminDetailsCity />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
