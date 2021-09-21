import MeetGreeter from './screens/MeetGreeter/MeetGreeter'
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/meetgreeter' exact>
          <MeetGreeter />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
