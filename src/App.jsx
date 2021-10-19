import { useContext, createContext, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import { Context } from './context/Context'
import { AdminProvider } from './context/Context'

import Admin from './admin/screens/Admin/Admin'
import AdminDetailsCity from './admin/screens/AdminDetailsCity/AdminDetailsCity'
import AdminDetailsGreeter from './admin/screens/AdminDetailsGreeter/AdminDetailsGreeter'
import AdminError from './admin/screens/AdminError/AdminError'
import AdminConnection from './admin/screens/AdminConnection/AdminConnection'
import CitiesList from './admin/screens/CitiesList/CitiesList'
import Contact from './screens/Contact/Contact'
import Greeter from './screens/Greeter/Greeter'
import Concept from './screens/Concept/Concept'
import AdminContent from './admin/screens/AdminContent/AdminContent'
import AdminContentDescription from './admin/screens/AdminContentDescription/AdminContentDescription'
import AdminContentValues from './admin/screens/AdminContentValues/AdminContentValues'
import AdminContentConcept from './admin/screens/AdminContentConcept/AdminContentConcept'
import GreetersList from './admin/screens/GreetersList/GreetersList'
import Home from './screens/Home/Home'
import MeetGreeter from './screens/MeetGreeter/MeetGreeter'

import './App.css'

function App() {
  const adminStatus = useContext(Context)
  return (
    <div>
      {console.log(adminStatus)}
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
          <Route path='/admin/connection' exact>
            <AdminConnection />
          </Route>
          {/* {adminStatus.INITIAL_STATE ? (
            <> */}
          <Route path='/admin' exact>
            <Admin />
          </Route>
          <Route path='/admin/content' exact>
            <AdminContent />
          </Route>
          <Route path='/admin/content/description' exact>
            <AdminContentDescription />
          </Route>
          <Route path='/admin/content/values' exact>
            <AdminContentValues />
          </Route>
          <Route path='/admin/content/concept' exact>
            <AdminContentConcept />
          </Route>
          <Route path='/admin/details-greeter/:greeterId' exact>
            <AdminDetailsGreeter />
          </Route>
          <Route path='/admin/details-city/:cityId' exact>
            <AdminDetailsCity />
          </Route>
          <Route path='/admin/list-greeters' exact>
            <GreetersList />
          </Route>
          <Route path='/admin/list-cities' exact>
            <CitiesList />
          </Route>
          {/* </> */}
          {/* // ) : ( // <AdminError />
          // )} */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
