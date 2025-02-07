import './App.css'
import Nav from './Nav'
import Home from './Home'
import Shop from './Shop'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App font-Timeless'>
      <Router>
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
      </Router>
    </div>
  )
}

export default App
