import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AdminDetailsCity from './admin/screens/AdminDetailsCity/AdminDetailsCity'
import AdminDetailsGreeter from './admin/screens/AdminDetailsGreeter/AdminDetailsGreeter'
import AdminConnection from './admin/screens/AdminConnection/AdminConnection'
import Admin from './admin/screens/Admin'
import AdminEditor from './admin/components/Editor/AdminEditor'
import AdminContent from './admin/screens/AdminContent/AdminContent'
import AdminContentPage from './admin/screens/AdminContentPage/AdminContentPage'
import Concept from './screens/Concept/Concept'
import Contact from './screens/Contact/Contact'
import Greeter from './screens/Greeter/Greeter'
import Home from './screens/Home/Home'
import InfoCity from './screens/InfoCity/InfoCity'
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
          <Route path='/infoCity' exact>
            <InfoCity />
          </Route>
          <Route path='/admin/content'>
            <AdminContent />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
          <Route path='/greeters/1' exact>
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
          <Route path='/admin/details-greeter' exact>
            <AdminDetailsGreeter />
          </Route>
          <Route path='/admin/details-city' exact>
            <AdminDetailsCity />
          </Route>
          <Route path='/admin/content/page' exact>
            <AdminContentPage />
          </Route>
          <Route path='/admin/editor' exact>
            <AdminEditor />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
