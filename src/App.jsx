import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Admin from './admin/screens/Admin/Admin'
import AdminDetailsCity from './admin/screens/AdminDetailsCity/AdminDetailsCity'
import AdminDetailsGreeter from './admin/screens/AdminDetailsGreeter/AdminDetailsGreeter'
import AdminConnection from './admin/screens/AdminConnection/AdminConnection'
import AdminEditor from './admin/components/Editor/AdminEditor'
import CitiesList from './admin/screens/CitiesList/CitiesList'
import Contact from './screens/Contact/Contact'
import Greeter from './screens/Greeter/Greeter'
import Concept from './screens/Concept/Concept'
import AdminContent from './admin/screens/AdminContent/AdminContent'
import AdminContentPage from './admin/screens/AdminContentPage/AdminContentPage'
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
          <Route path='/greeters/:id' exact>
            <Greeter />
          </Route>
          <Route path='/concept' exact>
            <Concept />
          </Route>

          <Route path='/admin' exact>
            <Admin />
          </Route>
          <Route path='/admin/connection' exact>
            <AdminConnection />
          </Route>
          <Route path='/admin/content' exact>
            <AdminContent />
          </Route>
          <Route path='/admin/content/page' exact>
            <AdminContentPage />
          </Route>
          <Route path='/admin/editor' exact>
            <AdminEditor />
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
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
