import { useContext, createContext, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Context from './context/Context'
import { AdminProvider } from './context/Context'

import { PrivateRoute } from './use/useSecureRoute'

import Admin from './admin/screens/Admin/Admin'
import AdminConnection from './admin/screens/AdminConnection/AdminConnection'
import AdminContent from './admin/screens/AdminContent/AdminContent'
import AdminContentConcept from './admin/screens/AdminContentConcept/AdminContentConcept'
import AdminContentDescription from './admin/screens/AdminContentDescription/AdminContentDescription'
import AdminContentValues from './admin/screens/AdminContentValues/AdminContentValues'
import AdminDetailsCity from './admin/screens/AdminDetailsCity/AdminDetailsCity'
import AdminDetailsGreeter from './admin/screens/AdminDetailsGreeter/AdminDetailsGreeter'
import AdminError from './admin/screens/AdminError/AdminError'
import CitiesList from './admin/screens/CitiesList/CitiesList'
import Concept from './screens/Concept/Concept'
import Contact from './screens/Contact/Contact'
import Greeter from './screens/Greeter/Greeter'
import GreetersList from './admin/screens/GreetersList/GreetersList'
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
          <Route path='/infoCity/:id' exact>
            <InfoCity />
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
          <PrivateRoute path='/admin' exact>
            <Admin />
          </PrivateRoute>
          <PrivateRoute path='/admin/content' exact>
            <AdminContent />
          </PrivateRoute>
          <PrivateRoute path='/admin/content/description' exact>
            <AdminContentDescription />
          </PrivateRoute>
          <PrivateRoute path='/admin/content/values' exact>
            <AdminContentValues />
          </PrivateRoute>
          <PrivateRoute path='/admin/content/concept' exact>
            <AdminContentConcept />
          </PrivateRoute>
          <PrivateRoute path='/admin/details-greeter/:greeterId' exact>
            <AdminDetailsGreeter />
          </PrivateRoute>
          <PrivateRoute path='/admin/details-city/:cityId' exact>
            <AdminDetailsCity />
          </PrivateRoute>
          <PrivateRoute path='/admin/list-greeters' exact>
            <GreetersList />
          </PrivateRoute>
          <PrivateRoute path='/admin/list-cities' exact>
            <CitiesList />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
