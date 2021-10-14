import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import Admin from './admin/screens/Admin/Admin'
import AdminDetailsCity from './admin/screens/AdminDetailsCity/AdminDetailsCity'
import AdminDetailsGreeter from './admin/screens/AdminDetailsGreeter/AdminDetailsGreeter'
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
import InfoCity from './screens/InfoCity/InfoCity'
import LanguageContextProvider from './LanguageContext'
import MeetGreeter from './screens/MeetGreeter/MeetGreeter'

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <LanguageContextProvider>
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
            <Route path='/admin/content'>
              <AdminContent />
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
            <Route path='/admin/content/description' exact>
              <AdminContentDescription />
            </Route>
            <Route path='/admin/content/values' exact>
              <AdminContentValues />
            </Route>
            <Route path='/admin/content/concept' exact>
              <AdminContentConcept />
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
        </LanguageContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
