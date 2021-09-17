import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Route path='/' exact>
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
