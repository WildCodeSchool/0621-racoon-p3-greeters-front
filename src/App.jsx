import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/' exact>
          <Navbar />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
