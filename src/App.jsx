import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Admin from './admin/screens/Admin'
import AdminConnection from './screens/AdminConnection/AdminConnection'
import Contact from './screens/Contact/Contact'
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
          <Route path='/admin' exact>
            <Admin />
          </Route>
          <Route path='/admin/connection' exact>
            <AdminConnection />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
